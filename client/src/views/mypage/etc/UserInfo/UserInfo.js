import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { findUserInfo, findUser } from "../../../../_actions/user_action";

function UserInfo() {
  const dispatch = useDispatch();

  const [userInfoList, setuserInfoList] = useState([]);
  const [UserInfo, setUserInfo] = useState([]);
  const [UserEmail, setUserEmail] = useState("");

  const aaa = () => {
    console.log(UserEmail);
  };

  useEffect(() => {
    dispatch(findUserInfo()).then((response) => {
      console.log(response.payload.userinfo.email);
      console.log(response.payload.userinfo);
      setuserInfoList(response.payload.userinfo);
      setUserEmail(response.payload.userinfo.email);
      let body = {
        email: response.payload.userinfo.email,
      };
      dispatch(findUser(body)).then((response) => {
        console.log(response.payload.userinfo2);
        console.log(response.payload.userinfo2.email);
        setUserInfo(response.payload.userinfo2);
      });
    });
    //최초 렌더링시에 한번만 실행되는곳
  }, []);

  return (
    <div>
      <h1>회원정보</h1>
      <p>{UserInfo.email}</p>
      <p>{UserInfo.name}</p>
      <p>{UserInfo.address}</p>
      <p>{UserInfo.extraaddress}</p>
    </div>
  );
}

export default UserInfo;
