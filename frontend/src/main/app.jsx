import React from "react";

import "../common/template/dependencies";

import Header from "../common/template/header";
import SideBar from "../common/template/sideBar";
import Footer from "../common/template/footer";
import Routes from "./routes";

export default function App(props) {
  return (
    <div className="wrapper">
      <Header />
      <SideBar />
      <div className="content-wrapper">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}
