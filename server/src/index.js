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
  const user = new User(req.body);

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
  User.find((err, user) => {
    // console.log(user);
    if (!user) {
      return res.json({
        유저목록조회: false,
        message: "유저가 없습니다.",
      });
    }
    return res.status(200).json({
      userinfo: user,
    });
  });
});

//검색 유저 목록 불러오기
app.post("/api/users/searchUserInfoList", (req, res) => {
  // console.log(decodeURIComponent(req.body.search));
  // console.log(req.body.type);
  //types 를통해 키값을 동적으로 할당한다.
  var types = req.body.type;

  //decodeURIComponent를 쓰는이유는 이메일에 @같이 특수기호가 들어가는경우 주소창에서 인코딩이 깨지므로
  var value = decodeURIComponent(req.body.search);

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

  User.find(objj, (err, user) => {
    if (err) {
      //에러가 있는경우 에러를 띄워준다.
      console.log(err);
    }
    if (!user) {
      return res.json({
        유저목록조회: false,
        message: "검색된 유저가 없습니다.",
        userinfo: [],
      });
    }
    return res.status(200).json({
      userinfo: user,
    });
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

app.listen(`${process.env.PORT}`, () => {
  console.log(`서버포트 : ${process.env.PORT}`);
});
