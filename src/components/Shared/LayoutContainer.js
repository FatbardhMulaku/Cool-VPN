import React from "react";

const LayoutContainer = (props) => {
  return (
    <section
      className={`fullBackground ${props.section != null ? props.section : ""}`}
      id={props.id != null ? props.id : ""}
    >
      <div
        className={`container ${
          props.container != null ? props.container : ""
        }`}
      >
        {props.children}
      </div>
    </section>
  );
};

export default LayoutContainer;
