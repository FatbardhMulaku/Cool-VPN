import React from "react";
import Fade from "react-reveal/Fade";
import { Cards } from "./data";

function SectionH2() {
  return (
    <div className="SectionH2 row mx-auto">
      <hr className="SectionH2__hr" />
      <Fade bottom cascade>
        {Cards.map(({ title, desc }, index) => (
          <div key={index} className="SectionH2__Box">
            <div className={`SectionH2_icon${index + 1} bg`} />
            <h6>{title}</h6>
            <p>{desc}</p>
          </div>
        ))}
      </Fade>
    </div>
  );
}

export default SectionH2;
