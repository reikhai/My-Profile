import React from "react";
import Header from "./component/layouts/header";
// import Footer from "./component/layouts/footer";
// import Main from "./routers/main";

export default function MasterLayout(props) {
  return (
    <>
      <div id="home">
        <Header />
      </div>
      {/* <Main /> */}

      {/* <div>
        <Footer />
      </div> */}
    </>
  );
}
