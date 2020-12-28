import React, { useState } from "react";
import { render } from "react-dom";
import { useTrail, a } from "react-spring";
import styled from "styled-components";

const Texteffect = styled.div`
  /* @import url("https://rsms.me/inter/inter.css"); */

  html,
  body {
    background: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;
    background-color: white;
  }

  .trails-main {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .trails-text {
    position: relative;
    width: 100%;
    height: 110px;
    line-height: 110px;
    color: black;
    font-size: 8em;
    font-weight: 800;
    letter-spacing: -9px;
    will-change: transform, opacity;
    overflow: hidden;
  }

  .trails-text > div {
    overflow: hidden;
  }
`;

function Trail({ open, children, ...props }) {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <Texteffect>
      <div className="trails-main" {...props}>
        <div>
          {trail.map(({ x, height, ...rest }, index) => (
            <a.div
              key={items[index]}
              className="trails-text"
              style={{
                ...rest,
                transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
              }}
            >
              <a.div style={{ height }}>{items[index]}</a.div>
            </a.div>
          ))}
        </div>
      </div>
    </Texteffect>

    //   <Trail open={open} onClick={() => set((state) => !state)}>
    //   <span>Lorem</span>
    //   <span>Ipsum</span>
    //   <span>Dolor</span>
    //   <span>Sit</span>
    // </Trail>
  );
}

export default Trail;
