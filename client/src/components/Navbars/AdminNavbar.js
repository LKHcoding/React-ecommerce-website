import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import "../../assets/CustomCss/AdminNavbar.css";
import axios from "axios";

function IndexNavbar(props) {
  const dispatch = useDispatch();
  const [navbarColor, setNavbarColor] = React.useState("");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("");
        // setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  const logoutuser = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        props.history.push("/login");
      } else {
        alert("로그아웃 실패");
      }
    });
  };
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="/" target="" id="navbar-brand">
              Admin-Page
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              관리자 페이지 입니다.
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              {/* <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                  <p>Download</p>
                </NavLink>
              </NavItem> */}
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons users_circle-08 mr-1"></i>
                  <p>Login</p>
                </DropdownToggle>
                <DropdownMenu>
                  {/* <DropdownItem to="/index" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    All components
                  </DropdownItem> */}
                  <DropdownItem
                    href="/signup-page"
                    target=""
                    className="AdminNavbar"
                  >
                    <i className="now-ui-icons users_single-02 mr-1"></i>
                    회원가입
                  </DropdownItem>
                  <DropdownItem
                    href="/login-page"
                    target=""
                    className="AdminNavbar"
                  >
                    <i className="now-ui-icons objects_key-25 mr-1"></i>
                    로그인
                  </DropdownItem>
                  <DropdownItem
                    href=""
                    target=""
                    onClick={logoutuser}
                    className="AdminNavbar"
                  >
                    <i className="now-ui-icons ui-1_lock-circle-open mr-1"></i>
                    로그아웃
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons business_badge mr-1"></i>
                  <p>User</p>
                </DropdownToggle>
                <DropdownMenu>
                  {/* <DropdownItem to="/index" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    All components
                  </DropdownItem> */}
                  <DropdownItem
                    href="/admin/usermanagement"
                    target=""
                    className="AdminNavbar"
                  >
                    <i className="now-ui-icons ui-1_zoom-bold mr-1"></i>
                    회원 관리
                  </DropdownItem>

                  <DropdownItem href="" target="" className="AdminNavbar">
                    <i className="now-ui-icons loader_gear mr-1"></i>
                    관리자 계정 관리
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p>Order</p>
                </DropdownToggle>
                <DropdownMenu>
                  {/* <DropdownItem to="/index" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    All components
                  </DropdownItem> */}
                  <DropdownItem
                    href="/signup-page"
                    target=""
                    className="AdminNavbar"
                  >
                    <i className="now-ui-icons shopping_box mr-1"></i>
                    상품 관리
                  </DropdownItem>
                  <DropdownItem href="" target="" className="AdminNavbar">
                    <i className="now-ui-icons shopping_delivery-fast mr-1"></i>
                    주문 관리
                  </DropdownItem>
                  <DropdownItem href="" target="" className="AdminNavbar">
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    통계
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p>Benefits</p>
                </DropdownToggle>
                <DropdownMenu>
                  {/* <DropdownItem to="/index" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    All components
                  </DropdownItem> */}
                  <DropdownItem
                    href="/signup-page"
                    target=""
                    className="AdminNavbar"
                  >
                    <i className="now-ui-icons shopping_credit-card mr-1"></i>
                    쿠폰 관리
                  </DropdownItem>
                  <DropdownItem href="" target="" className="AdminNavbar">
                    <i className="now-ui-icons business_money-coins mr-1"></i>
                    포인트 관리
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {/* <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  href="#pablo"
                  id="upgrade-to-pro"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                  <p>Upgrade to PRO</p>
                </Button>
                <UncontrolledTooltip target="#upgrade-to-pro">
                  Cooming soon!
                </UncontrolledTooltip>
              </NavItem> */}
              {/* <NavItem>
                <NavLink
                  href="https://twitter.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default withRouter(IndexNavbar);
