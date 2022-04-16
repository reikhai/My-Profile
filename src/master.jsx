import React from "react";
import Header from "./component/layouts/header";
import ScrollTopButton from "./component/layouts/footer";
import Main from "./routers/main";
import SideBar from "./component/layouts/sideBar";

export default function MasterLayout(props) {
  return (
    <>
      <div id="home">
        <Header />
      </div>
      <SideBar />
      <Main />
      <ScrollTopButton />
    </>
  );
}
