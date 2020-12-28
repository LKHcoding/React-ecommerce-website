import React, { useState, useRef, useEffect } from "react";
import { TweenLite, Power3 } from "gsap";
import styled from "styled-components";

import leftArrow from "./assets/arrow-left.svg";
import rightArrow from "./assets/arrow-right.svg";

const SliderStyle = styled.div`
  $text: #2e293c;
  $secondary: #a09da6;

  html,
  body {
    font-family: "Avenir", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .testimonial-section {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    &:after {
      content: "";
      position: absolute;
      width: 900px;
      height: 550px;
      background: #f2f2f6;
      right: 0;
      bottom: 0;
      opacity: 0.8;
      z-index: -10;
    }
    .testimonial-container {
      width: 1280px;
      min-width: 1280px;
      height: 600px;
      position: relative;
      .arrows {
        position: absolute;
        display: flex;
        width: 100px;
        align-items: center;
        justify-content: center;
        bottom: 0;
        top: 0;
        cursor: pointer;
        border-radius: 8px;
        transition: 0.3s ease-in-out;
        &:hover {
          box-shadow: 0px 0px 30px rgba(0, 0, 80, 0.05);
        }
        &.right {
          right: 0;
        }
      }
      .inner {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 600px;
        .t-image {
          width: 500px;
          height: 600px;
          display: flex;
          justify-content: center;
          align-items: center;
          &:after {
            content: "";
            position: absolute;
            width: 200px;
            height: 200px;
            background: #3f56da;
            left: 140px;
            top: 0;
            border-radius: 100%;
            z-index: -9;
          }
        }
        .t-image > ul {
          list-style: none;
          position: absolute;
          overflow: hidden;
          height: 460px;
          width: 340px;
          box-shadow: 0px 0px 40px rgba(0, 0, 10, 0.25);
        }
        .t-image > ul > li {
          height: 460px;
          width: 340px;
        }

        .t-image > ul > li > img {
          height: 460px;
          width: 340px;
        }

        .t-content {
          width: 500px;
          height: 600px;
          display: flex;
          align-items: center;
          ul {
            list-style: none;
            position: absolute;
            overflow: hidden;
            width: 500px;
            height: 400px;
            li {
              width: 500px;
              height: 400px;
              color: $text;
              display: flex;
              align-items: center;
              position: absolute;
              opacity: 0;
              &:nth-child(1) {
                &:after {
                  content: "";
                  position: absolute;
                  height: 12px;
                  width: 310px;
                  background: $text;
                  opacity: 0.3;
                  left: 0;
                  top: 206px;
                }
              }
              &:nth-child(2) {
                &:after {
                  content: "";
                  position: absolute;
                  height: 12px;
                  width: 148px;
                  background: $text;
                  opacity: 0.3;
                  left: 54px;
                  top: 126px;
                }
              }
              &:nth-child(3) {
                &:after {
                  content: "";
                  position: absolute;
                  height: 12px;
                  width: 280px;
                  background: $text;
                  opacity: 0.3;
                  left: 144px;
                  top: 166px;
                }
              }
              .content-inner {
                width: 500px;
                .quote {
                  font-size: 26px;
                  letter-spacing: 0.88px;
                  line-height: 40px;
                  font-weight: 700;
                  margin-bottom: 16px;
                }
                .name {
                  font-size: 18px;
                  letter-spacing: 0.88px;
                  line-height: 28px;
                  color: $secondary;
                  font-weight: 600;
                }
                .title {
                  font-size: 18px;
                  letter-spacing: 0.88px;
                  line-height: 28px;
                  color: $secondary;
                }
              }
            }
          }
        }
      }
    }
  }
`;

// const SliderStyle = styled.div`
//   $text: #2e293c;
//   $secondary: #a09da6;

//   html,
//   body {
//     font-family: "Avenir", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
//       Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
//   }

//   .testimonial-section {
//     border: solid 1px blue;
//     height: 100vh;
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     &:after {
//       content: "";
//       position: absolute;
//       width: 900px;
//       height: 550px;
//       background: #f2f2f6;
//       right: 0;
//       bottom: 0;
//       opacity: 0.8;
//       z-index: -10;
//     }
//     .testimonial-container {
//       border: solid 1px yellow;
//       width: 90%;
//       min-width: 1280px;
//       height: 90%;
//       position: relative;
//       .arrows {
//         position: absolute;
//         display: flex;
//         width: 100px;
//         align-items: center;
//         justify-content: center;
//         bottom: 0;
//         top: 0;
//         cursor: pointer;
//         border-radius: 8px;
//         transition: 0.3s ease-in-out;
//         &:hover {
//           box-shadow: 0px 0px 30px rgba(0, 0, 80, 0.05);
//         }
//         &.right {
//           right: 0;
//         }
//       }
//       .inner {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         height: 600px;
//         .t-image {
//           border: solid 1px red;
//           width: 50%;
//           height: 600px;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           &:after {
//             content: "";
//             position: absolute;
//             width: 200px;
//             height: 200px;
//             background: #3f56da;
//             left: 140px;
//             top: 0;
//             border-radius: 100%;
//             z-index: -9;
//           }
//           ul {
//             list-style: none;
//             display: flex;
//             position: absolute;
//             overflow: hidden;
//             height: 100%;
//             width: 100%;
//             box-shadow: 0px 0px 40px rgba(0, 0, 10, 0.25);
//             li {
//               height: 100%;
//               width: 100%;
//               img {
//                 height: 100%;
//                 width: 100%;
//               }
//             }
//           }
//         }
//         .t-content {
//           width: 500px;
//           height: 600px;
//           display: flex;
//           align-items: center;
//           ul {
//             position: absolute;
//             overflow: hidden;
//             width: 500px;
//             height: 400px;
//             li {
//               width: 500px;
//               height: 400px;
//               color: $text;
//               display: flex;
//               align-items: center;
//               position: absolute;
//               opacity: 0;
//               &:nth-child(1) {
//                 &:after {
//                   content: "";
//                   position: absolute;
//                   height: 12px;
//                   width: 310px;
//                   background: $text;
//                   opacity: 0.3;
//                   left: 0;
//                   top: 206px;
//                 }
//               }
//               &:nth-child(2) {
//                 &:after {
//                   content: "";
//                   position: absolute;
//                   height: 12px;
//                   width: 148px;
//                   background: $text;
//                   opacity: 0.3;
//                   left: 54px;
//                   top: 126px;
//                 }
//               }
//               &:nth-child(3) {
//                 &:after {
//                   content: "";
//                   position: absolute;
//                   height: 12px;
//                   width: 280px;
//                   background: $text;
//                   opacity: 0.3;
//                   left: 144px;
//                   top: 166px;
//                 }
//               }
//               .content-inner {
//                 width: 500px;
//                 .quote {
//                   font-size: 26px;
//                   letter-spacing: 0.88px;
//                   line-height: 40px;
//                   font-weight: 700;
//                   margin-bottom: 16px;
//                 }
//                 .name {
//                   font-size: 18px;
//                   letter-spacing: 0.88px;
//                   line-height: 28px;
//                   color: $secondary;
//                   font-weight: 600;
//                 }
//                 .title {
//                   font-size: 18px;
//                   letter-spacing: 0.88px;
//                   line-height: 28px;
//                   color: $secondary;
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

function SliderIntro() {
  const testimonials = [
    {
      name: "Julia Cameron",
      title: "Creative Director, VISA",
      image: `${require("../../assets/img/Smart-home.png")}`,
      quote:
        "It's all good. I was amazed at the quality of the Design. We've seen amazing results already.",
    },
    {
      name: "Mark Jacobs",
      title: "Tech Lead, Google",
      image: `${require("./assets/image.jpg")}`,
      quote:
        "The rebranding has really helped our business. Definitely worth the investment.",
    },
    {
      name: "Lisa Bearings",
      title: "Brand Coordinator, Facebook",
      image: `${require("./assets/image2.jpg")}`,
      quote:
        "The service was excellent. Absolutely wonderful! A complete redesign did it for us.",
    },
  ];

  let imageList = useRef(null);
  let testimonialList = useRef(null);
  const imageWidth = 340;

  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
  });

  useEffect(() => {
    TweenLite.to(testimonialList.children[0], 0, {
      opacity: 1,
    });
  }, []);

  //Image transition
  const slideLeft = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: -imageWidth * multiplied,
      ease: Power3.easeOut,
    });
  };

  const slideRight = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: imageWidth * multiplied,
      ease: Power3.easeOut,
    });
  };

  const scale = (index, duration) => {
    TweenLite.from(imageList.children[index], duration, {
      scale: 1.2,
      ease: Power3.easeOut,
    });
  };

  //Content transition

  const fadeOut = (index, duration) => {
    TweenLite.to(testimonialList.children[index], duration, {
      opacity: 0,
    });
  };

  const fadeIn = (index, duration) => {
    TweenLite.to(testimonialList.children[index], duration, {
      opacity: 1,
      delay: 1,
    });
  };

  const nextSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive2: true });
      //Image transition
      slideLeft(0, 1);
      slideLeft(1, 1);
      scale(1, 1);
      slideLeft(2, 1);
      slideLeft(2, 0);
      fadeOut(0, 1);
      fadeIn(1, 1);
    } else if (imageList.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive3: true });
      //Image transition
      slideRight(0, 1);
      slideLeft(1, 1, 2);
      slideLeft(2, 1, 2);
      scale(2, 1);
      //content transition
      fadeOut(1, 1);
      fadeIn(2, 1);
    } else if (imageList.children[2].classList.contains("active")) {
      setState({ isActive1: true, isActive3: false });
      //Image transition
      slideLeft(2, 1, 3);
      slideLeft(0, 1, 0);
      slideLeft(1, 0, 0);
      scale(0, 1);
      //content transition
      fadeOut(2, 1);
      fadeIn(0, 1);
    }
  };

  const prevSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive3: true });
      //Image transition
      slideLeft(2, 0, 3);
      slideLeft(2, 1, 2);
      scale(2, 1);
      slideRight(0, 1);
      slideRight(1, 1);
      //content transtion
      fadeOut(0, 1);
      fadeIn(2, 1);
    } else if (imageList.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive1: true });
      //Image transition
      slideLeft(0, 0);
      slideRight(0, 1, 0);
      slideRight(1, 1, 0);
      slideRight(2, 1, 2);
      scale(0, 1);
      //content transtion
      fadeOut(1, 1);
      fadeIn(0, 1);
    } else if (imageList.children[2].classList.contains("active")) {
      setState({ isActive2: true, isActive3: false });
      slideLeft(2, 1);
      slideLeft(1, 0, 2);
      slideLeft(1, 1);
      scale(1, 1);
      //content transtion
      fadeOut(2, 1);
      fadeIn(1, 1);
    }
  };

  return (
    <SliderStyle>
      <div className="testimonial-section">
        <div className="testimonial-container">
          <div onClick={prevSlide} className="arrows left">
            <span>
              <img src={leftArrow} alt="left arrow" />
            </span>
          </div>
          <div className="inner">
            <div className="t-image">
              <ul ref={(el) => (imageList = el)}>
                <li className={state.isActive1 ? "active" : ""}>
                  <img src={testimonials[0].image} alt={testimonials[0].name} />
                </li>
                <li className={state.isActive2 ? "active" : ""}>
                  <img src={testimonials[1].image} alt={testimonials[0].name} />
                </li>
                <li className={state.isActive3 ? "active" : ""}>
                  <img src={testimonials[2].image} alt={testimonials[0].name} />
                </li>
              </ul>
            </div>
            <div className="t-content">
              <ul ref={(el) => (testimonialList = el)}>
                <li className={state.isActive1 ? "active" : ""}>
                  <div className="content-inner">
                    <p className="quote">{testimonials[0].quote}</p>
                    <h3 className="name">{testimonials[0].name}</h3>
                    <h4 className="title">{testimonials[0].title}</h4>
                  </div>
                </li>
                <li className={state.isActive2 ? "active" : ""}>
                  <div className="content-inner">
                    <p className="quote">{testimonials[1].quote}</p>
                    <h3 className="name">{testimonials[1].name}</h3>
                    <h4 className="title">{testimonials[1].title}</h4>
                  </div>
                </li>
                <li className={state.isActive3 ? "active" : ""}>
                  <div className="content-inner">
                    <p className="quote">{testimonials[2].quote}</p>
                    <h3 className="name">{testimonials[2].name}</h3>
                    <h4 className="title">{testimonials[2].title}</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="arrows right" onClick={nextSlide}>
            <img src={rightArrow} alt="right arrow" />
          </div>
        </div>
      </div>
    </SliderStyle>
  );
}

export default SliderIntro;
