import React, { useEffect, useRef } from "react";
import { TimelineLite, TweenMax, Power3 } from "gsap";
import styled from "styled-components";

import imgGirl from "./images/girl.webp";
import imgBoy from "./images/boy.webp";
import arrow from "./images/arrow-right.svg";

const Styles1 = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,700i&display=swap");

  html {
    body {
      padding: 0;
      margin: 0;
      font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
    }
  }

  .hero {
    visibility: hidden;
    height: 100vh;
    .container {
      width: 1440px;
      min-width: 1440px;
      margin: 0 auto;
      .hero-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 24px;
        height: 100vh;
        .hero-content {
          width: 50%;
          .hero-content-inner {
            width: 400px;
            color: #323232;
            margin: 0 auto;
            h1 {
              font-weight: 500;
              font-size: 32px;
              margin-bottom: 24px;
              .hero-content-line {
                margin: 0;
                height: 44px;
                overflow: hidden;
                .hero-content-line-inner {
                }
              }
            }
            p {
              font-size: 14px;
              line-height: 24px;
              font-weight: 300;
              padding-right: 48px;
              margin-bottom: 56px;
            }
            .btn-row {
              position: relative;
              &:before {
                position: absolute;
                content: "";
                width: 56px;
                height: 1px;
                background: #dfdfdf;
                top: 50%;
                left: -68px;
              }
              button {
                background: none;
                border: none;
                font-size: 12px;
                padding: 0;
                cursor: pointer;
                text-transform: uppercase;
                font-weight: 700;
                letter-spacing: 0.7px;
                display: flex;
                align-items: center;
                position: relative;
                &:focus {
                  outline: none;
                }
                .arrow-icon {
                  position: absolute;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background: #007fff;
                  height: 48px;
                  width: 48px;
                  border-radius: 100px;
                  margin-left: 16px;
                  left: 64px;
                  transform-origin: center center;
                }
              }
            }
          }
        }
        .hero-images {
          width: 50%;
          height: 100vh;
          position: relative;
          .hero-images-inner {
            .hero-image {
              position: absolute;
              overflow: hidden;
              &.girl {
                top: 0;
                right: 0px;
                width: 45%;
                height: 50%;
              }
              &.boy {
                bottom: 24px;
                left: 0px;
                width: 52%;
                height: 65%;
              }
              img {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
`;

export default function Animation1() {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    // Images Vars
    const girlImage = images.firstElementChild; // or children[0]
    const boyImage = images.lastElementChild;

    //content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    //Remove initial flash
    TweenMax.to(app, 0, { css: { visibility: "visible" } });

    //Images Animation
    tl.from(girlImage, 1.2, { y: 1280, ease: Power3.easeOut }, "Start")
      .from(
        girlImage.firstElementChild,
        2,
        { scale: 1.6, ease: Power3.easeOut },
        0.2
      )
      .from(boyImage, 1.4, { y: 1280, ease: Power3.easeOut }, 0.2)
      .from(
        boyImage.firstElementChild,
        2,
        { scale: 1.6, ease: Power3.easeOut },
        0.2
      );

    //Content Animation
    tl.staggerFrom(
      [headlineFirst.children, headlineSecond.children, headlineThird.children],
      1,
      {
        y: 44,
        ease: Power3.easeOut,
        delay: 0.8,
      },
      0.15,
      "Start"
    )
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);
  }, [tl]);

  return (
    <Styles1>
      <div className="hero" ref={(el) => (app = el)}>
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-content-inner" ref={(el) => (content = el)}>
                <h1>
                  <div className="hero-content-line">
                    <div className="hero-content-line-inner">
                      Relieving the burden
                    </div>
                  </div>
                  <div className="hero-content-line">
                    <div className="hero-content-line-inner">
                      of disease caused
                    </div>
                  </div>
                  <div className="hero-content-line">
                    <div className="hero-content-line-inner">by behaviors.</div>
                  </div>
                </h1>
                <p>
                  Better treats serious cardiometabolic diseases to transform
                  lives and reduce healthcare utilization through the use of
                  digital therapeutics.
                </p>
                <div className="btn-row">
                  <button className="explore-button">
                    Explore
                    <div className="arrow-icon">
                      <img src={arrow} alt="row" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="hero-images">
              <div ref={(el) => (images = el)} className="hero-images-inner">
                <div className="hero-image girl">
                  <img src={imgGirl} alt="girl" />
                </div>
                <div className="hero-image boy">
                  <img src={imgBoy} alt="boy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styles1>
  );
}
