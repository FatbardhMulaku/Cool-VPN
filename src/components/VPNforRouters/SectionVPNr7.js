import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import InfoTxt from "../Shared/Text/TextInfoNew";
import Botton from "../UI/Button/ButtonNew";

function SectionVPNr7() {
  return (
    <LayoutGrid section="SectionVPNr7">
      <div className="col-sm-12 col-lg-5">
        <div className="SectionVPNr7__img bg" />
      </div>
      <div className="col-sm-12 col-lg-6">
        <InfoTxt
          txt="VPNforRouters.section_7"
          textAlign="left"
          color="white"
          margin="0px"
          klasa="SectionVPNr3__txt"
          DfTitle="World-class support for VPN router setup"
          DfDesc="Choosing a VPN server location and getting connected are a breeze. Say goodbye to confusing menus and settings—just click to connect. Want certain devices excluded from the VPN? No problem. Split tunneling gives you complete control."
        />
        <div>
          <Botton
            link="/"
            offsetBtn={-150}
            txt="VPNforRouters.section_7.btn"
            BGcolor="#fff"
            color="#3F3D56"
            margin="20px 0 0 0"
            HoverBGcolor="#000"
            HoverColor="#fff"
            border="1px solid #3F3D56"
            HoverBorder="1px solid #000"
            DfBtn="Get CoolVPN"
          />
        </div>
      </div>
    </LayoutGrid>
  );
}

export default SectionVPNr7;
