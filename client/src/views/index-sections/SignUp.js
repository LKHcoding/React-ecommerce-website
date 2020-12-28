import React from "react";
import { Link } from "react-router-dom";
import DaumPostcode from "components/Postcode/PostCode";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Modal,
  ModalBody,
  FormGroup,
} from "reactstrap";
import { registerUser } from "../../_actions/user_action";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  isEmail,
  isName,
  isPassword,
  isAddress,
} from "../../Validation/Validation";

// core components
import moment from "moment";
import "moment/locale/ko";

function SignUp(props) {
  const [modal1, setModal1] = React.useState(false);
  const [nameFocus, setNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [confimpasswordFocus, setconfrimPassFocus] = React.useState(false);
  const [addressdataFocus, setAddressDataFocus] = React.useState(false);
  const [extraAddressFocus, setExtraAddressFocus] = React.useState(false);

  const [name, setName] = React.useState("");
  const [nameErrorText, setNameErrorText] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [emailErrorText, setEmailErrorText] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordErrorText, setPasswordErrorText] = React.useState("");
  const [confirmpassword, setConfirmPassword] = React.useState("");
  const [addressdata, setAddressData] = React.useState("");
  const [address, setaddress] = React.useState("");
  const [addressErrorText, setAddressErrorText] = React.useState("");
  const [extraAddress, setExtraAddress] = React.useState("");
  const [zonecode, setZoneCode] = React.useState("");

  React.useEffect(() => {
    setAddressErrorText("");
  }, [address]);
  const dispatch = useDispatch();

  const fullAddressFn = (addressdata, zonecode) => {
    setaddress(addressdata);
    setAddressData(addressdata + " (" + zonecode + ")");
    setZoneCode(zonecode);
    setModal1(false);
  };

  const EmailCheck = () => {
    let emailError = "";

    if (!isEmail(email)) {
      emailError = "email을 확인해주세요";
    }
    if (emailError) {
      setEmailErrorText(emailError);
      return false;
    }
    return true;
  };

  const nameCheck = () => {
    let nameError = "";

    if (!isName(name)) {
      nameError = "이름을 입력해주세요";
    }
    if (nameError) {
      setNameErrorText(nameError);
      return false;
    }
    return true;
  };
  const passwordCheck = () => {
    let passwordError = "";

    if (!isName(name)) {
      passwordError = "비밀번호를 입력해주세요";
    }
    if (passwordError) {
      setPasswordErrorText(passwordError);
      return false;
    }
    return true;
  };
  const addressCheck = () => {
    let addressError = "";

    if (!isName(address)) {
      addressError = "주소를 입력해주세요";
    }
    if (addressError) {
      setAddressErrorText(addressError);
      return false;
    }
    return true;
  };
  const Signup = (e) => {
    const nameValid = nameCheck();
    const emailValid = EmailCheck();
    const passwordValid = passwordCheck();
    const addressValid = addressCheck();
    if (password !== confirmpassword) {
      return alert("비밀번호를 다시 확인해주세요.");
    }

    let body = {
      name: name,
      email: email,
      password: password,
      confirmpassword: confirmpassword,
      address: address,
      extraaddress: extraAddress,
      zonecode: zonecode,
      regdate: moment().format("YYYY-MM-DD HH:mm:ss"),
    };
    let pattern = /[~!#$%^&*()_+|<>?:{}]/;
    let pattern2 = /[~!@#$%^&*()_+|<>?:{}]/;
    if (nameValid) {
      if (emailValid) {
        if (passwordValid) {
          if (addressValid) {
            if (pattern.test(email)) {
              props.history.push("/signup-page");
            } else {
              if (pattern2.test(password)) {
                props.history.push("/signup-page");
              } else {
                if (pattern2.test(confirmpassword)) {
                  props.history.push("/signup-page");
                } else {
                  if (pattern2.test(extraAddress)) {
                    props.history.push("/signup-page");
                  } else {
                    dispatch(registerUser(body)).then((response) => {
                      if (response.payload.success) {
                        props.history.push("/index");
                      }
                    });
                  }
                }
              }
            }
          }
        }
      }
    }
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    // 추가 코드를 작성하여 DB를 제어하거나 state를 변경할 수 있습니다!
  };
  const changeEmail = (e) => {
    setEmail(e.currentTarget.value);
    setEmailErrorText("");
  };
  const changeName = (e) => {
    setName(e.currentTarget.value);
    setNameErrorText("");
  };
  const changePassword = (e) => {
    setPassword(e.currentTarget.value);
    setPasswordErrorText("");
  };
  return (
    <>
      <div
        className="section section-signup"
        style={{
          backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px",
        }}
      >
        <Container>
          <Row>
            <Card className="card-signup" data-background-color="blue">
              <Form
                action=""
                className="form"
                method=""
                onSubmit={handleSubmit}
              >
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h3">
                    Sign Up
                  </CardTitle>
                  <div className="social-line">
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="facebook"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="twitter"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="google"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                  </div>
                </CardHeader>
                <CardBody>
                  <InputGroup
                    className={
                      "no-border" + (nameFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="User Name..."
                      type="text"
                      onFocus={() => setNameFocus(true)}
                      onBlur={() => setNameFocus(false)}
                      onChange={changeName}
                    ></Input>
                  </InputGroup>
                  <div style={{ color: "red", fontSize: "12px" }}>
                    {nameErrorText}
                  </div>
                  <InputGroup
                    className={
                      "no-border" + (emailFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email..."
                      required
                      type="email"
                      name="email"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                      onChange={changeEmail}
                      autocomplete="off"
                    ></Input>
                  </InputGroup>
                  <div style={{ color: "red", fontSize: "12px" }}>
                    {emailErrorText}
                  </div>
                  <InputGroup
                    className={
                      "no-border" + (passwordFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_lock-circle-open"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password..."
                      type="password"
                      onFocus={() => setPasswordFocus(true)}
                      onBlur={() => setPasswordFocus(false)}
                      onChange={changePassword}
                    ></Input>
                  </InputGroup>
                  <div style={{ color: "red", fontSize: "12px" }}>
                    {passwordErrorText}
                  </div>
                  <InputGroup
                    className={
                      "no-border" +
                      (confimpasswordFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_lock-circle-open"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Confirm Password..."
                      type="password"
                      onFocus={() => setconfrimPassFocus(true)}
                      onBlur={() => setconfrimPassFocus(false)}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border" +
                      (addressdataFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons objects_globe"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="주소"
                      type="text"
                      onFocus={() => setAddressDataFocus(true)}
                      onBlur={() => setAddressDataFocus(false)}
                      value={addressdata}
                    ></Input>
                  </InputGroup>{" "}
                  <div style={{ color: "red", fontSize: "12px" }}>
                    {addressErrorText}
                  </div>
                  <InputGroup
                    className={
                      "no-border" +
                      (extraAddressFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons objects_globe"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="상세주소"
                      type="text"
                      onFocus={() => setExtraAddressFocus(true)}
                      onBlur={() => setExtraAddressFocus(false)}
                      onChange={(e) => setExtraAddress(e.target.value)}
                    ></Input>
                  </InputGroup>
                  <Button
                    color="info"
                    className="mr-1"
                    onClick={() => setModal1(true)}
                    type="button"
                  >
                    주소검색
                  </Button>
                  <Modal isOpen={modal1} toggle={() => setModal1(false)}>
                    <div className="modal-header justify-content-center">
                      <button
                        className="close"
                        type="button"
                        onClick={() => setModal1(false)}
                      >
                        <i className="now-ui-icons ui-1_simple-remove"></i>
                      </button>
                      <h4 className="title title-up">Modal title</h4>
                    </div>
                    <ModalBody>
                      <DaumPostcode setfullAddressFn={fullAddressFn} />
                    </ModalBody>
                  </Modal>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    href="#pablo"
                    onClick={Signup}
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </Row>
          <div className="col text-center">
            <Button
              className="btn-round btn-white"
              color="default"
              outline
              size="lg"
              tag={Link}
            >
              View Login Page
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default withRouter(SignUp);
