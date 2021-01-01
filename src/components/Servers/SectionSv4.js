import React from "react";
import TextInfo from "../Shared/Text/TextInfoNew";
import { ServerTypes } from "./data";

function SectionSv4() {
  return (
    <div className="SectionSv4 container">
      <TextInfo
        txt="Servers.section_4"
        textAlign="center"
        color="black"
        margin="0px"
        klasa="SectionSv2__txt"
        DfTitle="Specialty Server Types"
        DfDesc="Choose servers optimized for your individual needs "
      />

      <div className="row justify-content-center">
        {ServerTypes.map(({ title, desc }, index) => (
          <div key={index} className="SectionSv4__box">
            <div className={`SectionSv4__box--icon${index + 1} bg`} />
            <h5>{title}</h5>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionSv4;
