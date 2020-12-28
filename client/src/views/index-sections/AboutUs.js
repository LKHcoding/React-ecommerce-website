import React, { useEffect, useState, useCallback } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Trail from "./Trail.js";

import { useTrail, a, useSpring, animated } from "react-spring";

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
          <Trail open={open} onClick={() => set((state) => !state)}>
            <span>Lorem</span>
            <span>Ipsum</span>
            <span>Dolor</span>
            <span>Sit</span>
          </Trail>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
