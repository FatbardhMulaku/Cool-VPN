import React from "react";
import LayoutGrid from "./../Shared/LayoutGrid";
import TextGrid from "../Shared/Text/TextGridWhite";
import ImageGrid from "../UI/Img/ImgCard";

function SectionFe2() {
  return (
    <div className="Purple__bg">
      <LayoutGrid section="SectionFe2">
        <ImageGrid cardCss="col-sm-12 col-lg-6 ImgC" img="SectionFe2__img bg" />
        <TextGrid
          textCss="SectionFe_text"
          tr="Features.section_2"
          btnId="Features.section_2.btn"
          btnTxt="Read More"
          linkBtn="SectionFe3"
          DfTitle="Replace Your Original IP With An anonymous One"
          DfDesc="CoolVPN hides your IP address and encrypts your Internet traffic, so no one can see what you're browsing online.Downloading with CoolPN greatly increases your anonymity and puts the world’s best premium VPN provider in your corner"
        />
      </LayoutGrid>
    </div>
  );
}

export default SectionFe2;
