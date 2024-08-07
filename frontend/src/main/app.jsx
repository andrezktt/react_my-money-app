import React from "react";
import { HashRouter } from 'react-router-dom'

import Header from "../common/template/header";
import SideBar from "../common/template/sideBar";
import Footer from "../common/template/footer";
import Messages from "../common/messsage/messages";

import Routes from './routes'

export default function App(props) {
  return (
    <HashRouter>
      <div className="wrapper">
        <Header />
        <SideBar />
        <Routes />
        <Footer />
        <Messages />
      </div>
    </HashRouter>
  );
}
