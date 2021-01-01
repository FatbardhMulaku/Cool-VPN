import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import { Team } from "./data";

function SectionOT3() {
  return (
    <LayoutGrid section="SectionOT3">
      {Team.map(({ name, desc }, idx) => (
        <div className="SectionOT3--box" key={idx}>
          <div className={`SectionOT3--box__img${idx + 1} bg`} />
          <div>
            <h5>{name}</h5>
            <p>{desc}</p>
          </div>
          <div className="row justify-content-center">
            <div className="SectionOT2--box__FBicon bg" />
            <div className="SectionOT2--box__TWicon bg" />
            <div className="SectionOT2--box__INicon bg" />
          </div>
        </div>
      ))}
    </LayoutGrid>
  );
}

export default SectionOT3;
