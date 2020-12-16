import React from "react";
import IndexNavbar from "components/Navbars/UserNavbar.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserInfo from "./etc/UserInfo/UserInfo";
import SideMenu from "../../components/SideMenu/SideMenu";
import Order from "./etc/Order/Order";
import OrderSerch from "./etc/Myshop/OrderSerch";
import OrderCancel from "./etc/Myshop/OrderCancel";
import WishList from "./etc/Wish/WishList";
import Restock from "./etc/Wish/Restock";
function Mypage() {
  return (
    <>
      <IndexNavbar />
      <div style={{ display: "flex", flex_direction: "column" }}>
        <SideMenu />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Switch>
            <Route exact path="/mypage/userinfo" component={UserInfo} />
            <Route exact path="/mypage/address" component={Order} />
            <Route exact path="/mypage/orderserch" component={OrderSerch} />
            <Route exact path="/mypage/ordercancel" component={OrderCancel} />
            <Route exact path="/mypage/wishlist" component={WishList} />
            <Route exact path="/mypage/restock" component={Restock} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default Mypage;
