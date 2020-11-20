import React from "react";
import Footer from "../components/Shared/Footer";

const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <div id="back-to-top-anchor"></div>
      <main>{children}</main>
      <Footer /> 
    </div>
  );
};

export default DefaultLayout;