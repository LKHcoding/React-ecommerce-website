import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

import Typical from "react-typical";
import styled from "styled-components";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Images from "./index-sections/Images.js";
import BasicElements from "./index-sections/BasicElements.js";
import Navbars from "./index-sections/Navbars.js";
import Tabs from "./index-sections/Tabs.js";
import Tabs2 from "./index-sections/Tabs2.js";
import Pagination from "./index-sections/Pagination.js";
import Notifications from "./index-sections/Notifications.js";
import Typography from "./index-sections/Typography.js";
import Javascript from "./index-sections/Javascript.js";
import Carousel from "./index-sections/Carousel.js";
import NucleoIcons from "./index-sections/NucleoIcons.js";
import CompleteExamples from "./index-sections/CompleteExamples.js";
import SignUp from "./index-sections/SignUp.js";
import Examples from "./index-sections/Examples.js";
import Download from "./index-sections/Download.js";

//인트로 styled-components 영역
const IntroDiv = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 1031;
  position: fixed;
  top: 0px;
  background: black;
  color: white;
  animation-duration: 10s;
  animation-name: intro1;
  animation-fill-mode: both;

  @keyframes intro1 {
    0% {
      opacity: 1;
      z-index: 1031;
    }
    38% {
      opacity: 1;
      z-index: 1031;
    }
    44% {
      opacity: 0;
      z-index: 1031;
    }
    45% {
      z-index: -999;
    }
    100% {
      z-index: -999;

      opacity: 0;
    }
  }
`;
const IntroDIv2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 950px;
  font-size: 100px;
`;

function Index() {
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
      <IntroDiv>
        <IntroDIv2>
          <Typical
            steps={["Welcome", 800, "Welcome to SAMSUNG", 1000]}
            loop={2}
            wrapper="p"
          />
        </IntroDIv2>
      </IntroDiv>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <Tabs />
        <Tabs2 />
        {/* <Images /> */}
        <BasicElements />
        {/* <Navbars /> */}
        {/*<Pagination />
          <Notifications />
          <Typography />
          <Javascript />*/}
        <Carousel />
        <NucleoIcons />
        {/*<CompleteExamples />
          <SignUp />
          <Examples />*/}
        <Download />
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
