import React from "react";
import LayoutContainer from "../Shared/LayoutContainer";
import InfoTxt from "../Shared/Text/TextInfoNew";
import Botton from "../UI/Button/ButtonNew";

function SectionAfR1() {
  return (
    <LayoutContainer section="SectionAfR1 bg">
      <InfoTxt
        txt="AffiliateReports.section_1"
        textAlign="left"
        color="white"
        margin="0px"
        klasa="SectionAfR1__txt"
        DfTitle="CoolVPN Affiliate Reports"
        DfDesc="Join now and earn money by promoting one of the 
				best VPN services."
      />
      <Botton
        link="/become-partner"
        offsetBtn={-150}
        txt="AffiliateReports.section_1.btn"
        BGcolor="#8878BF"
        color="#fff"
        margin="20px 0 0 0"
        HoverBGcolor="transparent"
        HoverColor="#8878BF"
        border="1px solid #8878BF"
        HoverBorder="1px solid #8878BF"
        DfBtn="Become A Reseller"
      />
    </LayoutContainer>
  );
}

export default SectionAfR1;
