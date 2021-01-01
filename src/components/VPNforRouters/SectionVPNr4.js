import React from "react";
import { FormattedMessage } from "react-intl";
import LayoutContainer from "../Shared/LayoutContainer";
import InfoTxt from "../Shared/Text/TextInfoNew";

function SectionVPNr4() {
  return (
    <LayoutContainer section="SectionVPNr4">
      <h2>
        <FormattedMessage
          id="VPNforRouters.section_4.title1"
          defaultMessage="3 reasons to get a VPN router"
        />
      </h2>

      <div className="row justify-content-around">
        <div className="col-sm-12 col-lg-3 SectionVPNr2__l">
          <div className="SectionVPNr2__img2 bg" />
        </div>
        <InfoTxt
          txt="VPNforRouters.section_4"
          textAlign="left"
          color="black"
          margin="0px"
          klasa="SectionVPNr4__txt col-sm-12 col-lg-6"
          DfTitle=" Protect everything"
          DfDesc="Get the benefits of a VPN on any connected device, even ones that can’t normally run VPN software, like certain smart TVs and streaming devices, or gaming consoles like Xbox and PlayStation, or even IoT devices like smart speakers, security cameras, and lightbulbs. If it has Wi-Fi, it’s protected."
        />
      </div>
    </LayoutContainer>
  );
}

export default SectionVPNr4;
