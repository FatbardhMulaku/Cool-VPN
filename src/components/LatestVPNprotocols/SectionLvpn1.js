import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import InfoTxt from "../Shared/Text/TextInfoNew";

function SectionLvpn1() {
  return (
    <LayoutGrid section="SectionLvpn1 bg">
      <InfoTxt
        txt="LatestVPNprotocols.section_1"
        textAlign="left"
        color="white"
        margin="0px"
        klasa="SectionAIP1__txt col-sm-12 col-lg-6"
        DfTitle="Compare the latest VPN protocols"
        DfDesc="Available for windows and Linux, IKEv2 supports AES-128 and AES-256 respectively"
      />
    </LayoutGrid>
  );
}

export default SectionLvpn1;
