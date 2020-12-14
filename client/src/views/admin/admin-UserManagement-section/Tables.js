import React from "react";

// reactstrap components
import { Table, Container } from "reactstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { allUserInfo } from "../../../_actions/user_action";
import { useEffect } from "react";

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
}) {
  if (adminUserList) {
    return role === 0 ? (
      <tr>
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
      <tr>
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

  const [userInfoList, setuserInfoList] = useState([]);

  useEffect(() => {
    dispatch(allUserInfo()).then((response) => {
      console.log(response.payload.userinfo);
      setuserInfoList(response.payload.userinfo);
    });
    //최초 렌더링시에 한번만 실행되는곳
  }, []);

  return (
    <>
      <Container>
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
              />
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Tables;
