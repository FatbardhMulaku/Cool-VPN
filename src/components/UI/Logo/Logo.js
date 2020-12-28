import React from "react";
import { Link } from "react-router-dom";

const Logo = (props) => {
  return (
    <Link to="/" className={`logo ${props.linkCss}`}>
      <div className={`img_logo ${props.logo}`}></div>
    </Link>
  );
};

export default Logo;
