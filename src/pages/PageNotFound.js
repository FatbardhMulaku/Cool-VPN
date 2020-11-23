import React from "react";
import Header from "./../components/Shared/Header";

const PageNotFound = () => {
  return (
    <> 
    <Header BCs="#2D2E2D"  BC="transparent" TXT="a_white" LO="white_logo" BTN="white"/>
    <div className="fullBackground page-notfound">
      <div className="container">
        <div />
        <h1 className="text-center mb-0">Page Not Found 404</h1>
      </div>
    </div></>
  );
};

export default PageNotFound;