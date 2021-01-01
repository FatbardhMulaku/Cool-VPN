import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import InfoTxt from "../Shared/Text/TextInfoNew";

function SectionAIP1() {
  return (
    <LayoutGrid section="SectionAIP1 bg">
      <InfoTxt
        txt="AnonymousIP.section_1"
        textAlign="left"
        color="white"
        margin="0px"
        klasa="SectionAIP1__txt col-sm-12 col-lg-6"
        DfTitle="An anonymous IP Address"
        DfDesc="We built a dynamic VPN network by carefully selecting VPN 
				servers and locations that fulfill high standars of online of 
				online security and fast speed."
      />
    </LayoutGrid>
  );
}

export default SectionAIP1;
