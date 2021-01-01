import React from "react";
import TextGrid from "./../Shared/Text/TextGrid";
import { Text } from "./data";

function SectionH3() {
  return (
    <div className="SectionH3 row mx-auto">
      <TextGrid
        textCss="SectionH3_text"
        tr="Home.section_3"
        btnId="Home.section_3.btn"
        btnTxt="Let’s switch"
        DfTitle="It’s time to switch to Cool VPN"
        DfDesc="CoolVPN defeats content restrictions and censorship to deliver unlimited access to video, music, social media, and more, from anywhere in the world."
      />
      <div className="SectionH3__right col-sm-12 col-lg-6">
        {Text.map(({ txt }, index) => (
          <div key={index}>
            <div className={`SectionH3__img${index + 1} bg`} />
            <div className={`SectionH3__iconBox${index + 1}`}>
              <div className={`SectionH3__icon${index + 1} bg`} />
              <p>{txt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionH3;
