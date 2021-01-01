import React from "react";
import LayoutContainer from "../Shared/LayoutContainer";
import InfoTxt from "../Shared/Text/TextInfoNew";
import { section2 } from "./data";

function SectionWhyVpn2() {
  return (
    <LayoutContainer section="SectionWhyVpn2">
      {section2.map(({ title1, title2, desc1, desc2 }, idx) => (
        <div className="row" key={idx}>
          <div className="col-sm-12 col-lg-6 my-3 my-lg-5">
            <div className={`SectionWhyVpn2__imgA${idx + 1} bg mx-auto`} />
          </div>
          <div className="col-sm-12 col-lg-6 my-3 my-lg-5">
            <InfoTxt
              txt={`WhyVPN.section_2${idx + 1}`}
              textAlign="left"
              color="black"
              margin="0px"
              klasa="SectionWhyVpn2__txt"
              DfTitle={title1}
              DfDesc={desc1}
            />
          </div>
          <div className="col-sm-12 col-lg-6 my-3 my-lg-5">
            <InfoTxt
              txt={`WhyVPN.section_2b${idx + 1}`}
              textAlign="left"
              color="black"
              margin="0px"
              klasa="SectionWhyVpn2__txt"
              DfTitle={title2}
              DfDesc={desc2}
            />
          </div>
          <div className="col-sm-12 col-lg-6 my-3 my-lg-5">
            <div className={`SectionWhyVpn2__imgB${idx + 1} bg mx-auto`} />
          </div>
        </div>
      ))}
    </LayoutContainer>
  );
}

export default SectionWhyVpn2;
