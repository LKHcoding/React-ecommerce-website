/*eslint-disable*/
import React from "react";
import "assets/css/IndexHeader.css";

// reactstrap components
import { Container } from "reactstrap";
// core components

import { Button, Carousel, CarouselItem, CarouselIndicators } from "reactstrap";

import arrow_right from "assets/img/arrow_right2.png";
import arrow_left from "assets/img/arrow_left.png";

const items = [
  {
    src: require("assets/img/Smart-home.png"),
    altText: "삼성 Smart Home",
    caption: "삼성 Smart Home",
    text: "닷컴 Pick 가전으로 완성하는 세상 편한 생활",
    button: "info",
  },

  {
    src: require("assets/img/QLED8K.png"),
    altText: "202 QLED 8K",
    caption: "202 QLED 8K",
    text: "감각의 한계를 넘어서다",
    text2: "전체 QLED 8K보기",
    button: "info",
  },

  {
    src: require("assets/img/GalaxyZFold2.png"),
    altText: "Galaxy Z Fold2 5G",
    caption: "Galaxy Z Fold2 5G",
    text2: "더 알아보기",
    button: "primary",
  },
];

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <>
      <div
        className={"page-header clear-filter" + "" + "size"}
        id="carousel"
        ref={pageHeader}
      >
        {" "}
        {/*메인사진 안 텍스트 & 버튼 */}
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {items.map((item) => {
            return (
              <CarouselItem
                onExiting={onExiting}
                onExited={onExited}
                key={item.src}
              >
                <img src={item.src} alt={item.altText} />
                <div className="carousel-caption IndexHeaderText">
                  <h2>{item.caption}</h2>
                  <h4>{item.text}</h4>
                  <h3>{item.text2}</h3>
                  <div className="btn-box">
                    <Button
                      className="btn-round"
                      color={item.button}
                      type="button"
                    >
                      구매 혜택 보기
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </Carousel>
      </div>

      {/* 양사이드 왼오 */}
      <button
        className="carousel-control-prev"
        style={{
          border: "solid 1px red",
          top: "350px",
          height: "100px",
          width: "100px",
          left: "50px",
        }}
        data-slide="prev"
        href="#pablo"
        onClick={(e) => {
          e.preventDefault();
          previous();
        }}
        role="button"
      >
        <img src={arrow_left} />
      </button>

      <button
        className="carousel-control-next"
        style={{
          border: "solid 1px blue",
          top: "350px",
          height: "100px",
          width: "100px",
          right: "50px",
        }}
        data-slide="next"
        href="#pablo"
        onClick={(e) => {
          e.preventDefault();
          next();
        }}
        role="button"
      >
        <img src={arrow_right} />
      </button>
    </>
  );
}

export default IndexHeader;
