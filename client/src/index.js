/*

=========================================================
* Now UI Kit React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2020 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import Reducer from "./_reducers";
import promiseMiddleware from "redux-promise";
import AboutUs from "views/index-sections/AboutUs";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import SignUpPage from "../src/views/index-sections/SignUp";
import AdminIndex from "views/admin/AdminIndex";
import Mypage from "views/mypage/Mypage";
import UserManagement from "views/admin/UserManagement";
import AdminUserManagement from "views/admin/AdminUserManagement";
import Auth from "./hoc/auth";

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);
ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      Reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <BrowserRouter>
      <Switch>
        <Switch>
          {/* 어드민관련 페이지 시작 */}
          <Route exact path="/admin" component={Auth(AdminIndex, true, true)} />

          <Route
            exact
            path="/admin/usermanagement"
            component={Auth(UserManagement, true, true)}
          />

          <Route
            exact
            path="/admin/usermanagement:search"
            component={Auth(UserManagement, true, true)}
          />
          <Route
            exact
            path="/admin/adminusermanagement"
            component={Auth(AdminUserManagement, true, true)}
          />
          <Route
            exact
            path="/admin/adminusermanagement:search"
            component={Auth(AdminUserManagement, true, true)}
          />
          {/* 어드민관련 페이지 끝 */}
          <Route exact path="/index" component={Auth(Index, null)} />
          <Route path="/mypage" component={Auth(Mypage, null)} />
          <Route
            path="/nucleo-icons"
            render={(props) => <NucleoIcons {...props} />}
          />
          <Route
            path="/landing-page"
            render={(props) => <LandingPage {...props} />}
          />
          <Route
            path="/profile-page"
            render={(props) => <ProfilePage {...props} />}
          />
          <Route exact path="/about-us" component={Auth(AboutUs, null)} />
          <Route path="/login-page" component={Auth(LoginPage, false)} />
          <Route path="/signup-page" component={Auth(SignUpPage, false)} />
          <Redirect to="/index" />
          <Redirect from="/" to="/index" />
        </Switch>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
