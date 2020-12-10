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
} from "reactstrap";
import { registerUser } from "../../_action/user_action";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

// core components

function SignUp(props) {
  const [modal1, setModal1] = React.useState(false);
  const [nameFocus, setNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [confimpasswordFocus, setconfrimPassFocus] = React.useState(false);
  const [addressdataFocus, setAddressDataFocus] = React.useState(false);
  const [extraAddressFocus, setExtraAddressFocus] = React.useState(false);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmpassword, setConfirmPassword] = React.useState("");
  const [addressdata, setAddressData] = React.useState("");
  const [address, setaddress] = React.useState("");
  const [extraAddress, setExtraAddress] = React.useState("");
  const [zonecode, setZoneCode] = React.useState("");

  const dispatch = useDispatch();

  const fullAddressFn = (addressdata, zonecode) => {
    setaddress(addressdata);
    setAddressData(addressdata + " (" + zonecode + ")");
    setZoneCode(zonecode);
    setModal1(false);
  };
  const Signup = (e) => {
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
    };
    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        props.history.push("/index");
      } else {
        alert("양식을 모두 작성해주세요.");
      }
    });
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    // 추가 코드를 작성하여 DB를 제어하거나 state를 변경할 수 있습니다!
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
                      onChange={(e) => setName(e.target.value)}
                    ></Input>
                  </InputGroup>
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
                      type="email"
                      name="email"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                      onChange={(e) => setEmail(e.target.value)}
                    ></Input>
                  </InputGroup>
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
                      onChange={(e) => setPassword(e.target.value)}
                    ></Input>
                  </InputGroup>
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
                  </InputGroup>

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
              to="/login-page"
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
