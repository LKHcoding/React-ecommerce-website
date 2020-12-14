import React from "react";
import IndexNavbar from "components/Navbars/UserNavbar.js";
import { Navigation } from "../../../node_modules/react-scripts/node_modules/react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

function Mypage() {
  return (
    <div>
      <>
        <Navigation></Navigation>
        <IndexNavbar />
      </>
    </div>
  );
}

export default Mypage;
