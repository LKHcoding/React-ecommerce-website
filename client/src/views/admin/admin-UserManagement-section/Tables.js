import React from "react";

// reactstrap components
import { Table, Button, Modal, ModalBody } from "reactstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { allUserInfo } from "../../../_actions/user_action";
import { useEffect } from "react";
import styled from "styled-components";

function AllUserList({
  id,
  role,
  name,
  email,
  address,
  extraaddress,
  zonecode,
  token,
  adminUserList,
  setModal1,
  setSelectedUserInfo,
  CopyUserInfo,
}) {
  if (adminUserList) {
    return role === 0 ? (
      <tr
        onClick={() => {
          CopyUserInfo({
            id: id,
            role: role,
            name: name,
            email: email,
            address: address,
            extraaddress: extraaddress,
            zonecode: zonecode,
            token: token,
          });

          setSelectedUserInfo({
            id: id,
            role: role,
            name: name,
            email: email,
            address: address,
            extraaddress: extraaddress,
            zonecode: zonecode,
            token: token,
          });

          setModal1(true);
        }}
      >
        <td>{id}</td>
        <td>{role}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{address}</td>
        <td>{extraaddress}</td>
        <td>{zonecode}</td>
      </tr>
    ) : null;
  } else {
    return role !== 0 ? (
      <tr
        onClick={() => {
          CopyUserInfo({
            id: id,
            role: role,
            name: name,
            email: email,
            address: address,
            extraaddress: extraaddress,
            zonecode: zonecode,
            token: token,
          });

          setSelectedUserInfo({
            id: id,
            role: role,
            name: name,
            email: email,
            address: address,
            extraaddress: extraaddress,
            zonecode: zonecode,
            token: token,
          });

          setModal1(true);
        }}
      >
        <td>{id}</td>
        <td>{role}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{address}</td>
        <td>{extraaddress}</td>
        <td>{zonecode}</td>
      </tr>
    ) : null;
  }
}

function Tables({ adminUserList }) {
  const dispatch = useDispatch();

  const [modal1, setModal1] = useState(false);

  const [userInfoList, setuserInfoList] = useState([]);
  const [selectedUserInfo, setSelectedUserInfo] = useState([]);

  //modal input 값들
  const [modalInputId, setModalInputId] = useState("");
  const [modalInputRole, setModalInputRole] = useState("");
  const [modalInputName, setModalInputName] = useState("");
  const [modalInputEmail, setModalInputEmail] = useState("");
  const [modalInputAddress, setModalInputAddress] = useState("");
  const [modalInputExtraaddress, setModalInputExtraaddress] = useState("");
  const [modalInputZonecode, setModalInputZonecode] = useState("");
  const [modalInputToken, setModalInputToken] = useState("");

  //modal내에서 값 복사하기위한 함수
  const CopyUserInfo = (data) => {
    setModalInputId(data.id);
    setModalInputRole(data.role);
    setModalInputName(data.name);
    setModalInputEmail(data.email);
    setModalInputAddress(data.address);
    setModalInputExtraaddress(data.extraaddress);
    setModalInputZonecode(data.zonecode);
    setModalInputToken(data.token);
  };

  //스타일 컴포넌트 시작 --------------------------------------
  const ModalDiv1 = styled.div`
    display: flex;
    margin: 5px;
  `;
  const ModalDiv2 = styled.div`
    display: flex;
    width: 140px;
    margin-right: 3px;
    justify-content: flex-end;
  `;
  const ModalInput1 = styled.input`
    width: 100%;
    display: flex;
    line-height: 20px;
  `;
  //스타일 컴포넌트 끝 ----------------------------------------

  useEffect(() => {
    dispatch(allUserInfo()).then((response) => {
      console.log(response.payload.userinfo);
      setuserInfoList(response.payload.userinfo);
    });
    //최초 렌더링시에 한번만 실행되는곳
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#_id</th>
            <th>role</th>
            <th>name</th>
            <th>email</th>
            <th>address</th>
            <th>extraaddress</th>
            <th>zonecode</th>
          </tr>
        </thead>
        <tbody>
          {userInfoList.map((element) => (
            <AllUserList
              key={element._id}
              id={element._id}
              role={element.role}
              name={element.name}
              email={element.email}
              address={element.address}
              extraaddress={element.extraaddress}
              zonecode={element.zonecode}
              token={element.token}
              adminUserList={adminUserList}
              setModal1={setModal1}
              setSelectedUserInfo={setSelectedUserInfo}
              CopyUserInfo={CopyUserInfo}
            />
          ))}
        </tbody>
      </Table>

      <Modal isOpen={modal1} toggle={() => setModal1(false)}>
        <div className="modal-header justify-content-center">
          <button
            className="close"
            type="button"
            onClick={() => setModal1(false)}
          >
            <i className="now-ui-icons ui-1_simple-remove"></i>
          </button>
          <h4 className="title title-up">
            {adminUserList ? "관리자 계정 관리" : "일반 유저 관리"}
          </h4>
        </div>

        <ModalBody>
          {/* 모달 바디 내용 시작 */}
          <ModalDiv1>
            <ModalDiv2>Id : </ModalDiv2>
            <ModalInput1
              type="text"
              value={modalInputId}
              onChange={(e) => setModalInputId(e.target.value)}
            />
          </ModalDiv1>
          <ModalDiv1>
            <ModalDiv2>Role : </ModalDiv2>
            <ModalInput1
              type="text"
              value={modalInputRole}
              onChange={(e) => setModalInputRole(e.target.value)}
            />
          </ModalDiv1>
          <ModalDiv1>
            <ModalDiv2>Name : </ModalDiv2>
            <ModalInput1
              type="text"
              value={modalInputName}
              onChange={(e) => setModalInputName(e.target.value)}
            />
          </ModalDiv1>
          <ModalDiv1>
            <ModalDiv2>Email : </ModalDiv2>
            <ModalInput1
              type="text"
              value={modalInputEmail}
              onChange={(e) => setModalInputEmail(e.target.value)}
            />
          </ModalDiv1>
          <ModalDiv1>
            <ModalDiv2>Address : </ModalDiv2>
            <ModalInput1
              type="text"
              value={modalInputAddress}
              onChange={(e) => setModalInputAddress(e.target.value)}
            />
          </ModalDiv1>
          <ModalDiv1>
            <ModalDiv2>Extra-Addr : </ModalDiv2>
            <ModalInput1
              type="text"
              value={modalInputExtraaddress}
              onChange={(e) => setModalInputExtraaddress(e.target.value)}
            />
          </ModalDiv1>
          <ModalDiv1>
            <ModalDiv2>ZoneCode : </ModalDiv2>
            <ModalInput1
              type="text"
              value={modalInputZonecode}
              onChange={(e) => setModalInputZonecode(e.target.value)}
            />
          </ModalDiv1>
          <ModalDiv1>
            <ModalDiv2>Token : </ModalDiv2>
            <ModalInput1
              type="text"
              value={modalInputToken}
              onChange={(e) => setModalInputToken(e.target.value)}
            />
          </ModalDiv1>
        </ModalBody>
        <div className="modal-footer">
          <Button color="default" type="button">
            수정하기
          </Button>
          <Button color="danger" type="button" onClick={() => setModal1(false)}>
            취소
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default Tables;
