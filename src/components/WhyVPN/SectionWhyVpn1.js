import React from "react";
import Fade from "react-reveal/Fade";
import LayoutGrid from "../Shared/LayoutGrid";
import InfoTxt from "../Shared/Text/TextInfoNew";

function SectionWhyVpn1() {
  return (
    <LayoutGrid section="SectionWhyVpn1 bg">
      <Fade top big>
        <InfoTxt
          txt="WhyVPN.section_1"
          textAlign="left"
          color="white"
          margin="0px"
          klasa="SectionArt1__txt col-sm-12 col-lg-6"
          DfTitle="Give Your Photos and Videos a Dose of Weird"
          DfDesc="When it comes to being creative with photos and 
				video, app developers are starting to go way 
				beyond the limitations of Instagram"
        />
      </Fade>
    </LayoutGrid>
  );
}

export default SectionWhyVpn1;
