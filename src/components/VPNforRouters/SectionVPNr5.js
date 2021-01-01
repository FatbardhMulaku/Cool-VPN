import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import InfoTxt from "../Shared/Text/TextInfoNew";

function SectionVPNr5() {
  return (
    <LayoutGrid section="SectionVPNr5">
      <InfoTxt
        txt="VPNforRouters.section_5"
        textAlign="left"
        color="white"
        margin="0px"
        klasa="SectionVPNr5__txt col-sm-12 col-lg-6"
        DfTitle="Better security"
        DfDesc="A VPN works best when it’s always on. With an ExpressVPN router, you don’t have to remember to connect. Every device is secured, right from the source. And our Network Lock kill switch ensures uninterrupted protection."
      />
      <div className="col-sm-12 col-lg-5">
        <div className="SectionVPNr5__img bg" />
      </div>
    </LayoutGrid>
  );
}

export default SectionVPNr5;
