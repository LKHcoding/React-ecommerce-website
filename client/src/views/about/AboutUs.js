import React, { useEffect, useState, useCallback, useRef } from "react";
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import VisionText from "./VisionText.js";
import Animation1 from "./Animation1.js";
import SliderIntro from "./SliderIntro.js";
import AboutUsLocation from "./AboutUsLocation.js";
import { NavItem, NavLink } from "reactstrap";

import { useSpring } from "react-spring";

function AboutUs() {
  const [open, set] = useState(true);
  const [{ scroll }] = useSpring(() => ({ scroll: 0 }));
  const onScroll = useCallback(
    (e) => void set({ scroll: e.target.scrollTop / (window.innerHeight / 2) }),
    []
  );

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="main">
          <VisionText open={open}>
            {/* 인재와 기술을 바탕으로
          최고의 제품과 서비스를 창출하여
          인류사회에 공헌한다 */}
            <div className="maintext"></div>
            <span>On the Basis of Human Resources & Technologies</span>
            <span>Create the Best Products and Services</span>
            <span>And Contribute to Society</span>
          </VisionText>

          <Animation1></Animation1>
          <NavItem>
            <NavLink className={AboutUsLocation} href="/about-us-location">
              Global Samsung location
            </NavLink>
          </NavItem>
          <SliderIntro></SliderIntro>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
