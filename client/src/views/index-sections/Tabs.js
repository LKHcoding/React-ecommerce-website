import React from "react";
import "assets/css/Tabs.css"

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


import watch1 from "../../assets/img/watch2.png";
import buz1 from "../../assets/img/buz1.png";
// core components

const items = [
  {
    src: require("assets/img/Smart-home.png"),
    text: "닷컴 Pick 가전으로 완성하는 세상 편한 생활"
  },]

  
function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">

               <CardHeader> {/* 1. TabList 텍스트 */}
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={(iconPills === "1" ? "active" : "" )+" "+"tttt"}
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



        <Container style={{border: '1px solid red'}}> {/* 2.TabList 사진 및 디테일 */}
          
              <Card>
        
               

                  
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                
                
                    <TabPane tabId="iconPills1">

                    <div className="tab-detail1">
                      <div className="watch1">
                        <div className="fig-img">
                        <img src={watch1} />
                        </div>
                      
                        <div className="fig-img">
                        <img src={buz1} />
                        </div>
                      </div>
                      </div>
                    </TabPane>
                   

                        
                        
              
                    <TabPane tabId="iconPills2">
                     
                    <div className="tab-detail2" style={{display: "flex"}}>
                    <div className="col4">
                      detail4
                      </div>

                      <div className="col4">
                      detail5
                      </div>

                      <div className="col4">
                      detail6
                      </div>
                      </div>
                      
                    </TabPane>
                   


                    <TabPane tabId="iconPills3">
                    <div className="tab-detail3" style={{display: "flex"}}>
                    <div className="col4">
                    detail7
                      </div>

                      <div className="col4">
                      detail8
                      </div>

                      <div className="col4">
                      detail9
                      </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="iconPills4">
                    <div className="tab-detail4" style={{display: "flex"}}>
                    <div className="col4">
                    detail10
                      </div>

                      <div className="col4">
                      detail11
                      </div>

                      <div className="col4">
                      detail12
                      </div>
                      </div>
                    </TabPane>

                    <TabPane tabId="iconPills5">
                    <div className="tab-detail5" style={{display: "flex"}}>
                    <div className="col4">
                    detail13
                      </div>

                      <div className="col4">
                      detail14
                      </div>

                      <div className="col4">
                      detail15
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
