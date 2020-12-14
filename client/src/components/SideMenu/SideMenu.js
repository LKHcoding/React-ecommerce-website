import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import "../../assets/CustomCss/SideMenu.css";

function SideMenu(props) {
  return (
    <div className="sidemenu">
      <ul>
        asdf
        <li>
          <Link to="/mypage/userinfo">회원정보</Link>
        </li>
        <li></li>
      </ul>
    </div>
  );
}

export default withRouter(SideMenu);
