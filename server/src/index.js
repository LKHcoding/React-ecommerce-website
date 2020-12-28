const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const { User } = require("./models/User");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("./config/key");
const { auth } = require("./middleware/auth");
const cors = require("cors");
const { Product } = require("./models/Product");
const multer = require("multer");

env.config();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cookieParser());

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("데이터베이스 연결됨");
  });

app.post("/api/users/signup", (req, res) => {
  // console.log(req.body);
  const user = new User(req.body);
  // console.log(user);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.post("/api/users/signin", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "이메일에 해당하는 유저가 없습니다.",
      });
    }

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다",
        });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res
          .cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id });
      });
    });
  });
});

app.get("/api/users/auth", auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role == 0 ? true : false,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    role: req.user.role,
    image: req.user.image,
  });
});

//전체 유저 목록 불러오기
app.post("/api/users/allUserInfoList", (req, res) => {
  // console.log(req.body);
  var updatePage = req.body.page;
  var startpage = 0;
  var limitpage = 15;

  if (req.body.page !== null) {
    startpage = limitpage * (updatePage.page * 1) - limitpage;
  }
  // console.log(startpage);

  var obj1 = {};
  if (req.body.adminUserList === true) {
    obj1 = {
      role: 0,
    };
  } else {
    obj1 = {
      role: { $ne: 0 },
    };
  }

  User.find(obj1)
    .sort({ regdate: 1 })
    .skip(startpage)
    .limit(limitpage)
    .exec((err, user) => {
      //에러 출력
      if (err) {
        console.log(err);
        return res.json(err);
      }

      //유저가 없을경우
      if (!user) {
        return res.json({
          유저목록조회: false,
          message: "유저가 없습니다.",
          userinfo: [],
        });
      }

      //페이징 처리를 위해 전체유저수 구하기
      User.countDocuments(obj1).exec((count_error, count) => {
        if (count_error) {
          return res.json(count_error);
        }
        return res.status(200).json({
          userinfo: user,
          AllCount: count,
        });
      });
    });
});

//검색 유저 목록 불러오기
app.post("/api/users/searchUserInfoList", (req, res) => {
  //types 를통해 키값을 동적으로 할당한다.
  var types = req.body.data.type;

  //decodeURIComponent를 쓰는이유는 이메일에 @같이 특수기호가 들어가는경우 주소창에서 인코딩이 깨지므로
  var value = decodeURIComponent(req.body.data.search);

  //role의경우 value가 int형인데 숫자인 문자열로 들어가서 검색시 mongodb에서 err를 일으킴
  if (types === "role") {
    value = Number(value);
  }

  //role인경우와 아닌경우에 따라 문자열 검색과 정확한 권한 검색으로 나누어 저장함
  var objj =
    types === "role"
      ? {
          [types]: value,
        }
      : { [types]: { $regex: value } };

  //관리자 관리 페이지와 유저 관리 페이지별로 데이터를 다르게 검색한다.
  var objj2 = {};
  if (req.body.adminUserList === true) {
    objj2.role = 0;
  } else {
    objj2.role = { $ne: 0 };
  }

  // console.log(objj2);
  // console.log(req.body);

  //페이징 처리를 위한 소스
  var startpage = 0;

  //1페이지당 보여줄 회원 수
  var limitpage = 15;
  // console.log(req.body.data);
  if (req.body.data.page !== undefined && req.body.data.page !== "") {
    startpage = limitpage * req.body.data.page - limitpage;
  }

  User.find({ $and: [objj, objj2] })
    .sort({ regdate: 1 })
    .skip(startpage)
    .limit(limitpage)
    .exec((err, user) => {
      if (err) {
        console.log(err);
      }
      if (!user) {
        return res.json({
          유저목록조회: false,
          message: "유저가 없습니다.",
          userinfo: [],
        });
      }

      //페이징 처리를 위해 전체유저수 구하기
      User.countDocuments({ $and: [objj, objj2] }).exec(
        (count_error, count) => {
          if (count_error) {
            return res.json(count_error);
          }
          // console.log(user);
          return res.status(200).json({
            userinfo: user,
            AllCount: count,
          });
        }
      );
    });
});

//관리자페이지 -> 관리자 계정 관리 -> 수정 기능
app.post("/api/users/adminUserUpdate", (req, res) => {
  // console.log(req.body);

  User.findOneAndUpdate(
    { _id: req.body.id },
    {
      role: req.body.role,
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      extraaddress: req.body.extraaddress,
      zonecode: req.body.zonecode,
      token: req.body.token,
    },
    (err, user) => {
      // console.log(user);
      if (!user) {
        return res.json({
          수정성공유무: false,
          message: "유저가 없습니다.",
        });
      }
      return res.status(200).json({
        수정성공유무: true,
      });
    }
  );
});

app.delete("/api/users/adminUserDelete", (req, res) => {
  // console.log(req.body.id);
  User.findOneAndDelete({ _id: req.body.id }, (err, user) => {
    if (err) {
      return res.json({
        err: err,
      });
    }
    if (!user) {
      return res.json({
        삭제성공유무: false,
        message: "유저가 없습니다.",
      });
    }
    return res.status(200).json({
      삭제성공유무: true,
    });
  });
});

app.get("/api/users/logout", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({
      success: true,
    });
  });
});

app.post("/api/users/findUserInfo", auth, (req, res) => {
  User.findOne({ email: req.user.email }, (err, user) => {
    if (!user) {
      return res.json({ 유저정보불러오기: false, message: "유저가 없습니다" });
    }
    return res.status(200).json({ userinfo: user });
  });
});

app.post("/api/users/findUser", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({ success: false });
    }
    return res.status(200).json({ userinfo2: user });
  });
});

// app.post("/api/users/updateaddress"),
//   (req, res) => {
//     User.findOneAndUpdate(
//       { email: req.body.email },
//       {
//         address: req.body.address,
//         extraaddress: req.body.extraaddress,
//         zonecode: req.body.zonecode,
//       },
//       (err, user) => {
//         if (!user) {
//           return res.json({
//             주소업데이트: false,
//             message: "주소업데이트 실패",
//           });
//         } else {
//           return res
//             .status(200)
//             .json({ 주소업데이트: true, message: "주소업데이트 성공" });
//         }
//       }
//     );
//   };

app.post("/api/users/updateaddress", (req, res) => {
  console.log(req.body);
  User.findOneAndUpdate(
    { email: req.body.email },
    {
      address: req.body.address,
      extraaddress: req.body.extraaddress,
      zonecode: req.body.zonecode,
    },
    (err, user) => {
      if (err) return res.json({ 주소업데이트: false, err });
      return res.status(200).send({
        주소업데이트: true,
      });
    }
  );
});

// 상품관리 페이지

app.post("/api/products/allProducts", (req, res) => {
  Product.find((err, product) => {
    if (!product) {
      return res.json({
        상품목록조회: false,
        message: "상품이없습니다.",
        productinfo: [],
      });
    }
    return res.status(200).json({
      productinfo: product,
    });
  });
});

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cv(null, `${Date.now()}_${file.originalname}`);
  },
});

var upload = multer({ storages: storage }).single("product_img");

app.post("/api/products/addProduct", (req, res) => {
  const product = new Product(req.body);
  product.save((err, product) => {
    if (!product) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      image: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

app.listen(`${process.env.PORT}`, () => {
  console.log(`서버포트 : ${process.env.PORT}`);
});
