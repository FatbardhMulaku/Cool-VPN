import React from "react";
import LayoutContainer from "../Shared/LayoutContainer";
import { Cards2 } from "./data";
import InfoTxt from "../Shared/Text/TextInfoNew";

function SectionRH2() {
  return (
    <LayoutContainer section="SectionRH2">
      <InfoTxt
        txt="ResellerHistory.section_2"
        textAlign="center"
        color="black"
        margin="0px"
        klasa="SectionAS2__txt"
        DfTitle="How you can make money for each sale"
        DfDesc="Are you ready to EARN UP TO in 7 days like one of our affilitaes?"
      />

      <div className="row justify-content-center">
        {Cards2.map(({ title, desc }, idx) => (
          <div className="SectionAS2__box" key={idx}>
            <div className={`SectionAS2__box__img${idx + 1} bg`} />
            <div>
              <h5>{title}</h5>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="SectionRH2__imgB">
        <div className="SectionRH2__img bg" />
      </div>
    </LayoutContainer>
  );
}

export default SectionRH2;
