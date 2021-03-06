import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import Tables from "views/admin/admin-UserManagement-section/Tables";
import { Container } from "reactstrap";

// sections for this page
import BasicElements from "../index-sections/BasicElements.js";
import Download from "../index-sections/Download.js";
import Images from "../index-sections/Images.js";
import Navbars from "../index-sections/Navbars.js";
import Tabs from "../index-sections/Tabs.js";
import Pagination from "../index-sections/Pagination.js";
import Notifications from "../index-sections/Notifications.js";
import Typography from "../index-sections/Typography.js";
import Javascript from "../index-sections/Javascript.js";
import Carousel from "../index-sections/Carousel.js";
import NucleoIcons from "../index-sections/NucleoIcons.js";
import CompleteExamples from "../index-sections/CompleteExamples.js";
import SignUp from "../index-sections/SignUp.js";
import Examples from "../index-sections/Examples.js";

//style for admin-pages
import "../../assets/CustomCss/AdminCommonStyle.css";

function Index(props) {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <AdminNavbar />
      <div className="wrapper">
        {/* <IndexHeader /> */}
        <div className="main">
          <Container>
            <Tables adminUserList={false} params={props} />
            {/* <Images />
          <BasicElements />
          <Navbars />
          <Tabs />
          <Pagination />
          <Notifications />
          <Typography />
          <Javascript />
          <Carousel />
          <NucleoIcons />
          <CompleteExamples />
          <SignUp />
          <Examples /> */}
          </Container>
          <Download />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
