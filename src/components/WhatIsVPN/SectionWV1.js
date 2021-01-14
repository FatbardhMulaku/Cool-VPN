import React from "react";
import Fade from "react-reveal/Fade";
import TextInfo from "../Shared/Text/TextInfoNew";
import LayoutContainer from "../Shared/LayoutContainer";
import Botton from "../UI/Button/ButtonNew";

function SectionWV1() {
  return (
    <LayoutContainer section="SectionWV1">
      <Fade top>
        <TextInfo
          txt="WhatIsVPN.section_1"
          textAlign="left"
          color="white"
          margin="10px"
          klasa="SectionWV1__txt"
          DfTitle="What is a VPN?"
          DfDesc="A VPN, or virtual private network, is a secure tunnel between your device and the internet. VPNs protect your online traffic from snooping, interference, and censorship."
        />
      </Fade>
      <Fade bottom big>
        <div>
          <Botton
            link="SectionWV2"
            offsetBtn={-150}
            txt="WhatIsVPN.section_1.btn"
            BGcolor="#8878BF"
            color="#fff"
            margin="10px"
            HoverBGcolor="#fff"
            HoverColor="#8878BF"
            border="1px solid #8878BF"
            HoverBorder="1px solid #8878BF"
            DfBtn="Get CoolVPN"
          />
        </div>
      </Fade>
    </LayoutContainer>
  );
}

export default SectionWV1;
