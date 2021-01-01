import React from "react";
import LayoutContainer from "../Shared/LayoutContainer";
import InfoTxt from "../Shared/Text/TextInfoNew";

function SectionPP1() {
  return (
    <LayoutContainer section="SectionPP1 bg">
      <InfoTxt
        txt="PrivacyPolicy.section_1"
        textAlign="left"
        color="white"
        margin="0px"
        klasa="SectionPP1__txt"
        DfTitle="Privacy policy"
        DfDesc="The Terms of Service document (the “Terms”) outlines the terms and conditions of use of the VPN Services (The “Services” or “Servive”) "
      />
    </LayoutContainer>
  );
}

export default SectionPP1;
