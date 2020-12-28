import React from "react";

import Header from "./Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styled from "styled-components";

const Aboutuslocation1 = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Poppins:300,400,600,800&display=swap");

  red: #e20001;
  black: #191919;

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }

  .container {
    width: 1280px;
    min-width: 1280px;
    margin: 0 auto;
    .wrapper {
      padding: 0 48px;
      .home {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        p {
          font-size: 0.75rem;
          letter-spacing: 0.3rem;
          text-transform: uppercase;
          font-weight: 500;
        }
        h5 {
          margin-top: 260px;
          font-size: 24px;
          font-weight: 600;
          padding-right: 360px;
        }
      }
    }
  }

  header {
    height: 100px;
    .inner-header {
      position: relative;
      z-index: 10;
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo a {
        font-weight: 700;
        font-size: 1rem;
        text-decoration: none;
        color: black;
      }
      .menu {
        button {
          border: none;
          background: none;
          outline: none;
          cursor: pointer;
          font-size: 0.8rem;
          mix-blend-mode: difference;
        }
      }
    }
    .hamburger-menu {
      display: none;
      z-index: 9;
      top: 0;
      left: 0;
      right: 0;
      position: fixed;
      height: 100%;
      width: 100%;
      .menu-secondary-background-color {
        background: black;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: fixed;
        height: 100%;
        width: 100%;
        z-index: -1;
      }
      .menu-layer {
        position: relative;
        background: red;
        height: 100%;
        overflow: hidden;
        .menu-city-background {
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          position: absolute;
          height: 100%;
          width: 100%;
          opacity: 0;
          background-size: cover;
          background-repeat: no-repeat;
          animation-name: backgroundEffect;
          animation-duration: 30s;
          animation-iteration-count: infinite;
        }
        .wrapper {
          position: relative;
          .menu-links {
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            top: 200px;
            nav {
              display: block;
              ul {
                margin: 0;
                padding: 0;
                li {
                  list-style: none;
                  font-size: 6rem;
                  font-weight: 700;
                  cursor: pointer;
                  height: 135px;
                  overflow: hidden;
                  position: relative;
                  width: 700px;
                  a {
                    position: absolute;
                    color: #fff;
                    text-decoration: none;
                    &:hover {
                      color: black;
                    }
                  }
                }
              }
            }
            .info {
              color: #fff;
              width: 300px;
              h3 {
                font-size: 1.2rem;
                margin: 8px auto;
              }
              p {
                margin: 0 auto;
                font-size: 0.8rem;
              }
            }
          }
          .locations {
            position: absolute;
            bottom: -80px;
            color: #fff;
            margin-top: 16px;
            font-size: 0.8rem;
            font-weight: 600;
            span {
              cursor: pointer;
              &:first-child {
                margin-left: 64px;
              }
              font-weight: 400;
              margin: 0 32px;
              transition: 0.3s ease-in-out;
              &:hover {
                color: #fff;
                background: black;
                padding: 8px 24px;
                border-radius: 4px;
              }
            }
          }
        }
      }
    }
  }

  @keyframes backgroundEffect {
    0% {
      background-position: 0% 0%;
    }
    25% {
      background-position: 40% 10%;
    }
    50% {
      background-position: 0 10%;
    }
    75% {
      background-position: 10% 40%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
`;

function AboutUsLocation() {
  return (
    <Aboutuslocation1>
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <div className="wrapper">
              <div className="home">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route
                    exact
                    path="/opportunities"
                    component={Opportunities}
                  />
                  <Route exact path="/solutions" component={Solutions} />
                  <Route exact path="/contact-us" component={Contact} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </Aboutuslocation1>
  );
}

function Opportunities() {
  return <p>Discover our numerous opportunities</p>;
}

function Solutions() {
  return <p>Solutions that help you.</p>;
}

function Contact() {
  return <p>Feel free to reach us.</p>;
}

function Home() {
  return (
    <div className="container">
      <div className="wrapper">
        <h5>
          The <b>HAMBRG</b>, is a creative, engineer driven, global agency
          working on advancing the software, advertising and design communities
          to new heights.
        </h5>
      </div>
    </div>
  );
}
export default AboutUsLocation;
