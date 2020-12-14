import React from "react";
import "assets/css/Tabs.css";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

import watch1 from "../../assets/img/watch3.png";
import buz1 from "../../assets/img/buz2.png";
import note1 from "../../assets/img/note1.png";
import fold2 from "../../assets/img/fold2.png";
import tapS7 from "../../assets/img/tapS7.png";


// core components

const items = [
  {
    src: require("assets/img/Smart-home.png"),
    text: "닷컴 Pick 가전으로 완성하는 세상 편한 생활",
  },
];

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="TabList-main">
        <CardHeader className="TabList-Text-line">
          {" "}
          {/* 1. TabList 카드 가로라인 */}
          <Nav className="justify-content-center" role="tablist" tabs>
            <NavItem>
              <NavLink
                className={(iconPills === "1" ? "active" : "") + " " + "tttt"}
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  setIconPills("1");
                }}
              >
                새로운 갤럭시
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className={iconPills === "2" ? "active" : ""}
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  setIconPills("2");
                }}
              >
                특별한 혜택
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className={iconPills === "3" ? "active" : ""}
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  setIconPills("3");
                }}
              >
                우리집 맑음샵
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className={iconPills === "4" ? "active" : ""}
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  setIconPills("4");
                }}
              >
                대한민국 혁신대상 수상
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className={iconPills === "5" ? "active" : ""}
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  setIconPills("5");
                }}
              >
                추천제품
              </NavLink>
            </NavItem>
          </Nav>
        </CardHeader>

        {/* 2.TabList 사진 및 디테일 */}
        <Container className="TabListContainer">
          <Card>
            <TabContent
              className="text-center"
              activeTab={"iconPills" + iconPills}
            >
              <TabPane tabId="iconPills1">

                
              <div class="set-tab-prd-inner">

                {/*첫번째 왼쪽박스 */}
                <div className="prd-item-grp">
                  <div className="prd-item">
                    <a
                      href="/sec/watches/galaxy-watch3-r840/SM-R840NZKAKOO/"
                      className="prd-item-inner"
                    >
                      <div className="fig-img">
                        <img
                          src={watch1}
                          style={{ height: "106px;", width: "156px" }}
                        />

                        <div class="prd-name">
                          <span class="tit-name">
                            갤럭시 워치3 45 mm (블루투스)
                          </span>
                          <span class="num">SM-R840NZKAKOO</span>
                          <span class="memb">
                            <span id="107635_0_G100174258_prclbl">회원가</span>
                            <em id="gdPrc_107635_0_G100174258_price">
                              473,000 원
                            </em>
                          </span>
                        </div>
                      </div>

                    </a>
                  </div>


                  <div className="prd-item">
                    <a
                      href="/sec/buds/package-sm-r180nzn/SM-R180NZNAEVT/"
                      className="prd-item-inner"
                    >
                      <div className="fig-img">
                        <img
                          src={buz1}
                          style={{ height: "156px;", width: "156px" }}
                        />
                        <div class="prd-name">
                          <span class="tit-name">
                            갤럭시 버즈 라이브 스페셜 액세서리 패키지 (미스틱
                            브론즈)
                          </span>
                          <span class="num">SM-R180NZNAEVT</span>
                          <span class="memb">
                            <span id="107635_0_G000179496_prclbl">회원가</span>
                            <em id="gdPrc_107635_0_G000179496_price">
                              198,000 원
                            </em>
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
             


                {/*첫번째 중간박스 */}
                <div class="prd-item-point">
                  <a
                      href=""
                      className="prd-item-inner"
                    >
                    <div className="fig-img">
                      <img src={note1} />
                      <div class="prd-name">
                          <span class="tit-name">
                          갤럭시 노트20 Ultra 5G 자급제
                          </span>
                          <span class="num">SM-N986NZNEKOO</span>
                          <span class="memb">
                            <span id="107635_0_G000179496_prclbl">회원가</span>
                            <em id="gdPrc_107635_0_G000179496_price">
                            1,452,000 원
                            </em>
                          </span>
                        </div>
                    </div>  
                  </a>
                  
                </div>


              {/*첫번째 오른쪽박스 */}
              <div className="prd-item-grp">
                  <div className="prd-item">
                    <a
                      href="/sec/watches/galaxy-watch3-r840/SM-R840NZKAKOO/"
                      className="prd-item-inner2"
                    >
                      <div className="fig-img">
                        <img
                          src={fold2}
                          style={{ height: "106px;", width: "156px" }}
                        />

                        <div class="prd-name">
                          <span class="tit-name">
                            갤럭시 Z폴드2 5G 자급제
                          </span>
                          <span class="num">SM-F916NZNAKOO</span>
                          <span class="memb">
                            <span id="107635_0_G100174258_prclbl">회원가</span>
                            <em id="gdPrc_107635_0_G100174258_price">
                            2,398,000 원
                            </em>
                          </span>
                        </div>
                      </div>

                    </a>
                  </div>


                  <div className="prd-item">
                    <a
                      href="/sec/buds/package-sm-r180nzn/SM-R180NZNAEVT/"
                      className="prd-item-inner2"
                    >
                      <div className="fig-img">
                        <img
                          src={tapS7}
                          style={{ height: "156px;", width: "156px" }}
                        />
                        <div class="prd-name">
                          <span class="tit-name">
                            갤럭시 버즈 라이브 스페셜 액세서리 패키지 (미스틱
                            브론즈)
                          </span>
                          <span class="num">SM-R180NZNAEVT</span>
                          <span class="memb">
                            <span id="107635_0_G000179496_prclbl">회원가</span>
                            <em id="gdPrc_107635_0_G000179496_price">
                              198,000 원
                            </em>
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>



              </div>
              </TabPane>






              <TabPane tabId="iconPills2">
                <div className="tab-detail2" style={{ display: "flex" }}>
                  <div className="col4">detail4</div>

                  <div className="col4">detail5</div>

                  <div className="col4">detail6</div>
                </div>
              </TabPane>

              <TabPane tabId="iconPills3">
                <div className="tab-detail3" style={{ display: "flex" }}>
                  <div className="col4">detail7</div>

                  <div className="col4">detail8</div>

                  <div className="col4">detail9</div>
                </div>
              </TabPane>
              <TabPane tabId="iconPills4">
                <div className="tab-detail4" style={{ display: "flex" }}>
                  <div className="col4">detail10</div>

                  <div className="col4">detail11</div>

                  <div className="col4">detail12</div>
                </div>
              </TabPane>

              <TabPane tabId="iconPills5">
                <div className="tab-detail5" style={{ display: "flex" }}>
                  <div className="col4">detail13</div>

                  <div className="col4">detail14</div>

                  <div className="col4">detail15</div>
                </div>
              </TabPane>
            </TabContent>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default Tabs;
