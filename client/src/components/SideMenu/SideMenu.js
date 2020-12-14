import React from "react";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import "../../assets/CustomCss/SideMenu.css";

function SideMenu(props) {
  return (
    <div className="sidemenu">
      <Navigation
        activeItemId=""
        onSelect={({ itemId }) => {
          props.history.push(itemId);
        }}
        items={[
          {
            title: "회원정보",
            itemId: "/about",
            subNav: [
              {
                title: "나의 정보",
                itemId: "/mypage",
              },
              {
                title: "배송지 관리",
                itemId: "/mypage/address",
              },
            ],
          },
          {
            title: "나의 쇼핑",
            itemId: "/shop",
            subNav: [
              {
                title: "주문/배송 조회",
                itemId: "/another/teams",
              },
              {
                title: "주문 취소 조회",
                itemId: "/another/teams",
              },
            ],
          },
          {
            title: "관심 목록",
            itemId: "/wish",
            subNav: [
              {
                title: "나의 찜목록",
                itemId: "/another/teams",
              },
              {
                title: "재입고 알림",
                itemId: "/another/teams",
              },
            ],
          },
          {
            title: "쿠폰존",
            itemId: "/coupon",
            subNav: [
              {
                title: "쿠폰 다운로드",
                itemId: "/another/teams",
              },
              {
                title: "보유 쿠폰",
                itemId: "/another/teams",
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default withRouter(SideMenu);
