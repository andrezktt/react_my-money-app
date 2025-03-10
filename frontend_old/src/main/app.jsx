import React from "react";
import "../common/template/dependencies";
import Header from "../common/template/header";
import SideBar from "../common/template/sideBar";
import Footer from "../common/template/footer";
import Messages from "../common/messsage/messages";

export default function App(props) {
  return (
    <div className="wrapper">
      <Header />
      <SideBar />
      <div className="content-wrapper">
        {props.children}
      </div>
      <Footer />
      <Messages />
    </div>
  );
}
