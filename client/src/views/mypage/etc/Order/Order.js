import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  findUserInfo,
  findUser,
  updateaddress,
} from "../../../../_actions/user_action";
import { Button, Modal, ModalBody } from "reactstrap";
import DaumPostcode from "components/Postcode/PostCode";

function Order() {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const dispatch = useDispatch();

  const [userInfoList, setuserInfoList] = useState([]);
  const [UserInfo, setUserInfo] = useState([]);
  const [UserEmail, setUserEmail] = useState("");
  const [UserAddress, setUserAddress] = useState("");
  const [userAddressData, setuserAddressData] = useState("");
  const [userExtraAddress, setUserExtraAddress] = useState("");
  const [addressdata, setAddressData] = React.useState("");
  const [address, setaddress] = React.useState("");
  const [extraAddress, setExtraAddress] = React.useState("");
  const [zonecode, setZoneCode] = React.useState("");

  useEffect(() => {
    dispatch(findUserInfo()).then((response) => {
      setuserInfoList(response.payload.userinfo);
      setUserEmail(response.payload.userinfo.email);
      let body = {
        email: response.payload.userinfo.email,
      };
      dispatch(findUser(body)).then((response) => {
        setUserInfo(response.payload.userinfo2);
        setUserAddress(response.payload.userinfo2.address);
        setuserAddressData(
          response.payload.userinfo2.address +
            "(" +
            response.payload.userinfo2.zonecode +
            ")"
        );
        setUserExtraAddress(response.payload.userinfo2.extraaddress);
        setZoneCode(response.payload.userinfo2.zonecode);
      });
    });
    //최초 렌더링시에 한번만 실행되는곳
  }, []);
  const a = () => {
    console.log(UserAddress);
  };

  const fullAddressFn = (addressdata, zonecode) => {
    setUserAddress(addressdata);
    setuserAddressData(addressdata + " (" + zonecode + ")");
    setZoneCode(zonecode);
    setModal2(false);
    setUserExtraAddress("");
  };

  const changeaddress = (body) => {
    console.log(body);
    dispatch(updateaddress(body)).then((response) => {
      if (response.payload.주소업데이트) {
        alert("주소변경 완료");
        window.location.reload(true);
      } else {
        alert("주소변경 실패");
      }
    });
    setModal(false);
  };

  return (
    <div>
      <h1 onClick={a}>배송지 관리</h1>
      <p>내 배송지</p>
      <p>
        {UserInfo.address} {UserInfo.extraaddress} ({UserInfo.zonecode})
      </p>
      <button
        onClick={() => {
          setModal(true);
        }}
      >
        수정하기
      </button>
      <Modal isOpen={modal} toggle={() => setModal(false)}>
        <ModalBody>
          <input type="text" value={userAddressData} />
          <input
            type="text"
            value={userExtraAddress}
            onChange={(e) => setUserExtraAddress(e.target.value)}
          />
          <Button
            onClick={() => {
              changeaddress({
                email: UserEmail,
                address: UserAddress,
                extraaddress: userExtraAddress,
                zonecode: zonecode,
              });
            }}
          >
            수정
          </Button>
          <Button
            onClick={() => {
              setModal(false);
            }}
          >
            닫기
          </Button>
          <Button
            onClick={() => {
              setModal2(true);
            }}
          >
            주소검색
          </Button>
          <Modal isOpen={modal2} toggle={() => setModal2(false)}>
            <ModalBody>
              <DaumPostcode setfullAddressFn={fullAddressFn} />
            </ModalBody>
          </Modal>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Order;
