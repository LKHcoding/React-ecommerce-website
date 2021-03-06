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


import vacuum from "../../assets/img/vacuum.png";
import airdresser from "../../assets/img/airdresser.png";
import cubepackage from "../../assets/img/cubepackage.png";
import cube from "../../assets/img/cube.png";
import airconditioner from "../../assets/img/airconditioner.png";


import five1 from "../../assets/img/five1.png";
import five2 from "../../assets/img/five2.png";
import five3 from "../../assets/img/five3.png";
import five4 from "../../assets/img/five4.png";
import five5 from "../../assets/img/five5.png";
import five6 from "../../assets/img/five6.png";
import five7 from "../../assets/img/five7.png";
import five8 from "../../assets/img/five8.png";



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
          {/* 1. TabList 카드 텍스트 가로라인 */}
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



        {/* 1. TabList 사진 및 디테일 */}
        <Container className="TabListContainer">
          <Card>
            <TabContent
              className="text-center"
              activeTab={"iconPills" + iconPills}
            >
              <TabPane tabId="iconPills1">

                
              <div class="set-tab-prd-inner">

                {/*1-1첫번째 왼쪽박스 */}
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
             


                {/*1-2.첫번째 중간박스 */}
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


              {/*1-3.첫번째 오른쪽박스 */}
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
            <div class="set-tab-prd-inner">

              {/*2-1첫번째 왼쪽박스 */}
              <div className="prd-item-grp">
                <div className="prd-item">
                  <a
                    href="/sec/watches/galaxy-watch3-r840/SM-R840NZKAKOO/"
                    className="prd-item-inner"
                  >
                    <div className="fig-img">
                      <img
                        src={vacuum}
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
                        src={airdresser}
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



              {/*2-2.첫번째 중간박스 */}
              <div class="prd-item-point2">
                <a
                    href=""
                    className="prd-item-inner"
                  >
                  <div className="fig-img">
                    <img src={cubepackage} />
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


            {/*2-3.첫번째 오른쪽박스 */}
            <div className="prd-item-grp">
                <div className="prd-item">
                  <a
                    href="/sec/watches/galaxy-watch3-r840/SM-R840NZKAKOO/"
                    className="prd-item-inner2"
                  >
                    <div className="fig-img">
                      <img
                        src={cube}
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
                        src={airconditioner}
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






 



            {/*3. 세번째 */}
            <TabPane tabId="iconPills3">          
            <div class="set-tab-prd-inner">

              {/*3-1첫번째 왼쪽박스 */}
              <div className="prd-item-grp">
                <div className="prd-item">
                  <a
                    href="/sec/watches/galaxy-watch3-r840/SM-R840NZKAKOO/"
                    className="prd-item-inner"
                  >
                    <div className="fig-img">
                      <img
                        src={vacuum}
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
                        src={airdresser}
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



              {/*3-2.첫번째 중간박스 */}
              <div class="prd-item-point">
                <a
                    href=""
                    className="prd-item-inner"
                  >
                  <div className="fig-img">
                    <img src={cubepackage} />
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


            {/*-3.첫번째 오른쪽박스 */}
            <div className="prd-item-grp">
                <div className="prd-item">
                  <a
                    href="/sec/watches/galaxy-watch3-r840/SM-R840NZKAKOO/"
                    className="prd-item-inner2"
                  >
                    <div className="fig-img">
                      <img
                        src={cube}
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
                        src={airconditioner}
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








              <TabPane tabId="iconPills4">          
            <div class="set-tab-prd-inner">

              {/*2-1첫번째 왼쪽박스 */}
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



              {/*1-2.첫번째 중간박스 */}
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


            {/*1-3.첫번째 오른쪽박스 */}
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


          {/*5. */}
        <TabPane tabId="iconPills5">          
            <div class="set-tab-prd-inner">

              {/*5-1첫번째 왼쪽박스 */}
              <div className="prd-item-grp">
                <div className="prd-item">
                  <a
                    href="/sec/watches/galaxy-watch3-r840/SM-R840NZKAKOO/"
                    className="prd-item-inner"
                  >
                    <div className="fig-img">
                      <img
                        src={five1}
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
                        src={five2}
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



              {/*5-2번째 중간 */}
              <div className="prd-item-grp">
                <div className="prd-item">
                  <a
                    href="/sec/watches/galaxy-watch3-r840/SM-R840NZKAKOO/"
                    className="prd-item-inner"
                  >
                    <div className="fig-img">
                      <img
                        src={five3}
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
                        src={five4}
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

              <div className="prd-item-grp">
                <div className="prd-item">
                  <a
                    href="/sec/watches/galaxy-watch3-r840/SM-R840NZKAKOO/"
                    className="prd-item-inner"
                  >
                    <div className="fig-img">
                      <img
                        src={five5}
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
                        src={five6}
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



                            <div className="prd-item-grp">
                <div className="prd-item">
                  <a
                    href="/sec/watches/galaxy-watch3-r840/SM-R840NZKAKOO/"
                    className="prd-item-inner"
                  >
                    <div className="fig-img">
                      <img
                        src={five7}
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
                        src={five8}
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
            </TabContent>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default Tabs;
