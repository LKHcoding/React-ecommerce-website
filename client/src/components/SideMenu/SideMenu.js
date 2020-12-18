import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { useState, useEffect } from "react";

import "../../assets/CustomCss/SideMenu.css";

function SideMenu(props) {
  const [isClick, setIsClick] = useState(false);
  const [isClick2, setIsClick2] = useState(false);
  const [isClick3, setIsClick3] = useState(false);
  const [isClick4, setIsClick4] = useState(false);
  const [isShow, setIsShow] = useState("none");
  const [isShow2, setIsShow3] = useState("none");
  const [isShow3, setIsShow2] = useState("none");
  const [isShow4, setIsShow4] = useState("none");

  const showmenu = () => {
    if (!isClick) {
      setIsClick(true);
      setIsShow("");
      setIsShow2("none");
      setIsShow3("none");
      setIsShow4("none");
      setIsClick2(false);
      setIsClick3(false);
      setIsClick4(false);
    } else {
      setIsClick(false);
      setIsShow("none");
    }
  };
  const showmenu2 = () => {
    if (!isClick2) {
      setIsClick2(true);
      setIsShow2("");
      setIsShow("none");
      setIsShow3("none");
      setIsShow4("none");
      setIsClick(false);
      setIsClick3(false);
      setIsClick4(false);
    } else {
      setIsClick2(false);
      setIsShow2("none");
    }
  };
  const showmenu3 = () => {
    if (!isClick3) {
      setIsClick3(true);
      setIsShow3("");
      setIsShow2("none");
      setIsShow("none");
      setIsShow4("none");
      setIsClick2(false);
      setIsClick(false);
      setIsClick4(false);
    } else {
      setIsClick3(false);
      setIsShow3("none");
    }
  };
  const showmenu4 = () => {
    if (!isClick4) {
      setIsClick4(true);
      setIsShow4("");
      setIsShow("none");
      setIsShow2("none");
      setIsShow3("none");
      setIsClick(false);
      setIsClick2(false);
      setIsClick3(false);
    } else {
      setIsClick4(false);
      setIsShow4("none");
    }
  };

  return (
    <div className="sidemenu">
      <ul className="sidenav">
        <div className="namediv" onClick={showmenu}>
          회원정보
        </div>
        <li>
          <i
            onClick={() => {
              props.history.push("/mypage/userinfo");
            }}
            style={{ display: isShow }}
          >
            나의 정보
          </i>
        </li>
        <li>
          <i
            onClick={() => {
              props.history.push("/mypage/address");
            }}
            style={{ display: isShow }}
          >
            배송지 관리
          </i>
        </li>
      </ul>
      <ul className="sidenav">
        <div className="namediv" onClick={showmenu2}>
          나의 쇼핑
        </div>
        <li>
          <i
            onClick={() => {
              props.history.push("/mypage/orderserch");
            }}
            style={{ display: isShow3 }}
          >
            주문/배송 조회
          </i>
        </li>
        <li>
          <i
            onClick={() => {
              props.history.push("/mypage/ordercancel");
            }}
            style={{ display: isShow3 }}
          >
            주문 취소 조회
          </i>
        </li>
      </ul>
      <ul className="sidenav">
        <div className="namediv" onClick={showmenu3}>
          관심 목록
        </div>
        <li>
          <i
            onClick={() => {
              props.history.push("/mypage/wishlist");
            }}
            style={{ display: isShow2 }}
          >
            나의 찜목록
          </i>
        </li>
        <li>
          <i
            onClick={() => {
              props.history.push("/mypage/restock");
            }}
            style={{ display: isShow2 }}
          >
            재입고 알림
          </i>
        </li>
      </ul>
      <ul className="sidenav">
        <div className="namediv" onClick={showmenu4}>
          쿠폰존
        </div>
        <li>
          <i
            onClick={() => {
              props.history.push("/mypage/userinfo");
            }}
            style={{ display: isShow4 }}
          >
            쿠폰 다운로드
          </i>
        </li>
        <li>
          <i
            onClick={() => {
              props.history.push("/mypage/address");
            }}
            style={{ display: isShow4 }}
          >
            보유 쿠폰
          </i>
        </li>
      </ul>
    </div>
  );
}

export default withRouter(SideMenu);
