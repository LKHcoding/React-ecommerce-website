import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";

export default function (SpecificComponent, option, adminRoute = null) {
  //option-----
  //null -> 아무나 출입 가능한 페이지
  //true -> 로그인한 유저만 출입 가능한 페이지
  //false -> 로그인한 유저는 출입 불가능한 페이지

  //adminRoute -> 관리자 권한 여부에 따라서 페이지를 보여줄지 말지 관리하는 변수

  function AuthenticationCheck(props) {
    // console.log(props);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(auth()).then((response) => {
        // console.log(response);

        //로그인 하지 않은 상태
        if (!response.payload.isAuth) {
          if (option) {
            alert("로그인이 필요합니다.");
            props.history.push("/login");
          }
        } else {
          //로그인 한 상태
          if (adminRoute && !response.payload.isAdmin) {
            alert("관리자가 아닙니다.");
            props.history.push("/");
          } else {
            if (option === false) {
              alert("로그인한 사용자가 접근 할 수 없습니다.");
              props.history.push("/");
            }
          }
        }
      });
    }, []);
    return <SpecificComponent {...props} />;
  }

  return AuthenticationCheck;
}
