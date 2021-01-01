import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import InfoTxt from "../Shared/Text/TextInfoNew";

function SectionYP3() {
  return (
    <LayoutGrid section="SectionYP3">
      <div className="col-sm-12 col-lg-6">
        <div className="SectionYP3__img1 bg" />
      </div>
      <div className="col-sm-12 col-lg-6">
        <InfoTxt
          txt="YoutubeProxy.section_2"
          textAlign="left"
          color="black"
          margin="0px"
          klasa="SectionYP3__txt"
          DfTitle="How to bypass YouTube restrictions?"
          DfDesc="Using a VPN changes your IP address, the unique number that identifies you and your location in the world. With a new IP address, you can browse the internet as if you were in the UK, Germany, Canada, Japan, or virtually any country, if the VPN service has servers there"
        />
      </div>
      <div className="col-sm-12 col-lg-6">
        <InfoTxt
          txt="YoutubeProxy.section_2b"
          textAlign="left"
          color="black"
          margin="0px"
          klasa="SectionYP3__txt"
          DfTitle="Access YouTube content safely"
          DfDesc="Using a VPN changes your IP address, the unique number that identifies you and your location in the world. With a new IP address, you can browse the internet as if you were in the UK, Germany, Canada, Japan, or virtually any country, if the VPN service has servers there"
        />
      </div>
      <div className="col-sm-12 col-lg-6">
        <div className="SectionYP3__img2 bg" />
      </div>
    </LayoutGrid>
  );
}

export default SectionYP3;
