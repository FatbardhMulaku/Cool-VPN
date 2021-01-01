import React from "react";
import LayoutContainer from "../Shared/LayoutContainer";
import { Software } from "./data";
import InfoTxt from "../Shared/Text/TextInfoNew";

function SectionPd5() {
  return (
    <LayoutContainer section="SectionPd5 bg">
      <InfoTxt
        txt="Product.section_5z"
        textAlign="center"
        color="white"
        margin="0px"
        klasa="SectionPd5__txt"
        DfTitle="What do you get with CoolVPN software?"
        DfDesc="Each VPN app comes with:"
      />

      <div className="row justify-content-center">
        {Software.map(({ title }, idx) => (
          <div className="SectionPd5__box shadow" key={idx}>
            <div className={`SectionPd5__box__img${idx + 1} bg`} />
            <h6>{title}</h6>
          </div>
        ))}
      </div>
    </LayoutContainer>
  );
}

export default SectionPd5;
