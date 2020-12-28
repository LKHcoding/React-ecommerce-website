import React from "react";

// reactstrap components
import {
  Table,
  Button,
  Modal,
  ModalBody,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Form,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  allUserInfo,
  adminUserUpdate,
  adminUserDelete,
  searchUserInfo,
} from "../../../_actions/user_action";
import { useEffect } from "react";
import styled from "styled-components";
import queryString from "query-string";

import Paginations from "views/admin/admin-UserManagement-section/Paginations";

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

const ModalLabel1 = styled.label`
  width: 100%;
  display: flex;
`;

const SearchBoxDiv = styled.div`
  display: flex;
  height: 50px;
  width: 350px;
  align-items: center;
  margin: 5px 0px;
`;

const DivForPagination = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
//스타일 컴포넌트 끝 ----------------------------------------

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
  // setSelectedUserInfo,
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

function Tables({ adminUserList, params }) {
  //url 경로에 붙어서 온 (EX: ?search=a&name=asdf) parameter 받아오는법
  const qry = queryString.parse(params.location.search);

  const dispatch = useDispatch();

  const [modal1, setModal1] = useState(false);

  const [userInfoList, setuserInfoList] = useState([]);

  //검색창 states
  const [Searching, setSearching] = useState("");
  const [firstFocus, setFirstFocus] = useState(false);
  const [searchType, setSearchType] = useState("name");

  //Pagination 용 states
  const [MaximumUserInfoCount, setMaximumUserInfoCount] = useState(0);
  const [currentPageNumber, setcurrentPageNumber] = useState(1);

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

  //검색 타입 선택 함수
  const ChangeSearchType = (type) => {
    setSearchType(type);
  };

  //유저 정보 수정 함수
  const AdminUserUpdate = (selectedUserInfo2) => {
    dispatch(adminUserUpdate(selectedUserInfo2)).then((response) => {
      if (response.payload.수정성공유무) {
        alert("수정 완료");
        window.location.reload(true);
      } else {
        alert("수정 실패");
      }
    });
  };
  //유저 삭제 함수
  const AdminUserDelete = (selectedUserId) => {
    dispatch(adminUserDelete(selectedUserId)).then((response) => {
      if (response.payload.삭제성공유무) {
        alert("삭제 완료");
        window.location.reload(true);
      } else {
        alert("삭제 실패");
        console.log(response.payload.err);
        console.log(response.payload.message);
      }
    });
  };

  useEffect(() => {
    //currentPageNumber
    if (qry.page !== undefined && qry.page !== null && qry.page !== "") {
      setcurrentPageNumber(qry.page);
    }

    // console.log(qry);
    //최초 렌더링시에 한번만 실행되는곳
    setSearching(qry.search);
    // console.log(qry);
    ChangeSearchType(
      JSON.stringify(qry.type) === undefined ? "name" : qry.type
    );

    if (JSON.stringify(qry.search) === undefined) {
      dispatch(
        allUserInfo(qry.page === undefined ? null : qry, adminUserList)
      ).then((response) => {
        // console.log(response.payload);

        //페이징용(total 유저수가 원래 몇인지 알기위해서[총 페이지 수를 구하기 위함])
        setMaximumUserInfoCount(response.payload.AllCount);

        setuserInfoList(response.payload.userinfo);
      });
    } else {
      dispatch(searchUserInfo(qry, adminUserList)).then((response) => {
        // console.log(response.payload.userinfo);

        //페이징용(total 유저수가 원래 몇인지 알기위해서[총 페이지 수를 구하기 위함])
        setMaximumUserInfoCount(response.payload.AllCount);

        setuserInfoList(response.payload.userinfo);
      });
    }
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
          {userInfoList.length !== 0
            ? userInfoList.map((element) => (
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
                  // setSelectedUserInfo={setSelectedUserInfo}
                  CopyUserInfo={CopyUserInfo}
                />
              ))
            : null}
        </tbody>
      </Table>

      {/* 페이지네이션 시작-------------------------------------------------------------------- */}
      <DivForPagination>
        {MaximumUserInfoCount !== 0 ? (
          <Paginations
            currentPage={currentPageNumber}
            maximumPage={MaximumUserInfoCount}
            howManyOnePage={15}
            qry={qry}
            adminUserList={adminUserList}
          />
        ) : null}
      </DivForPagination>
      {/* 페이지네이션 끝-------------------------------------------------------------------- */}

      {/* 검색 */}
      <Form
        action={
          adminUserList ? "/admin/adminusermanagement" : "/admin/usermanagement"
        }
        method="GET"
      >
        <SearchBoxDiv>
          <UncontrolledDropdown>
            <DropdownToggle caret>{searchType}</DropdownToggle>
            <DropdownMenu>
              {/* <DropdownItem header>Header</DropdownItem> */}
              {/* <DropdownItem disabled>Action</DropdownItem> */}
              <DropdownItem onClick={() => ChangeSearchType("role")}>
                role
              </DropdownItem>
              <DropdownItem onClick={() => ChangeSearchType("name")}>
                name
              </DropdownItem>
              <DropdownItem onClick={() => ChangeSearchType("email")}>
                email
              </DropdownItem>
              <DropdownItem onClick={() => ChangeSearchType("address")}>
                address
              </DropdownItem>
              <DropdownItem onClick={() => ChangeSearchType("extraaddress")}>
                extraaddress
              </DropdownItem>
              <DropdownItem onClick={() => ChangeSearchType("zonecode")}>
                zonecode
              </DropdownItem>
              {/* <DropdownItem divider /> */}
            </DropdownMenu>
          </UncontrolledDropdown>

          <InputGroup
            style={{ height: "40px", margin: "10px" }}
            className={
              "no-border input-lg" + (firstFocus ? " input-group-focus" : "")
            }
          >
            <InputGroupAddon addonType="prepend" style={{ height: "40px" }}>
              <InputGroupText>
                <i className="now-ui-icons users_circle-08"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input type="hidden" name="type" value={searchType}></Input>

            <Input
              style={{ height: "40px" }}
              name="search"
              placeholder="Search"
              value={Searching || ""}
              onChange={(e) => setSearching(e.target.value)}
              type="text"
              onFocus={() => setFirstFocus(true)}
              onBlur={() => setFirstFocus(false)}
            ></Input>
          </InputGroup>
        </SearchBoxDiv>
      </Form>

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
            <ModalLabel1>{modalInputId}</ModalLabel1>
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
          <div>
            <Button
              color="default"
              type="button"
              onClick={() => {
                var retVal = window.confirm("수정 하시겠습니까?");
                if (retVal) {
                  AdminUserUpdate({
                    id: modalInputId,
                    role: modalInputRole,
                    name: modalInputName,
                    email: modalInputEmail,
                    address: modalInputAddress,
                    extraaddress: modalInputExtraaddress,
                    zonecode: modalInputZonecode,
                    token: modalInputToken,
                  });
                }
              }}
            >
              수정
            </Button>
            <Button
              color="default"
              type="button"
              style={{ marginLeft: "5px" }}
              onClick={() => {
                var retVal = window.confirm("정말 삭제 하시겠습니까?");
                if (retVal) {
                  AdminUserDelete({ id: modalInputId });
                }
              }}
            >
              삭제
            </Button>
          </div>

          <Button color="danger" type="button" onClick={() => setModal1(false)}>
            취소
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default Tables;
