import React from "react";
import IndexNavbar from "components/Navbars/UserNavbar.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserInfo from "./etc/UserInfo/UserInfo";
import SideMenu from "../../components/SideMenu/SideMenu";
import Order from "./etc/Order/Order";
function Mypage() {
  return (
    <>
      <IndexNavbar />
      <SideMenu />
      <Switch>
        <Route exact path="/mypage" component={UserInfo} />
        <Route exact path="/mypage/address" component={Order} />
      </Switch>
    </>
  );
}

export default Mypage;
