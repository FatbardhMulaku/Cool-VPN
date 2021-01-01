import React from "react";
import LayoutGrid from "./../Shared/LayoutGrid";
import TextGrid from "../Shared/Text/TextGrid";
import ImageGrid from "../UI/Img/ImgCard";

function SectionFe3() {
  return (
    <LayoutGrid section="SectionFe3">
      <TextGrid
        textCss="SectionFe_text"
        tr="Features.section_3"
        btnId="Features.section_3.btn"
        btnTxt="Read More"
        linkBtn="SectionFe4"
        DfTitle="Encrypts Your Data"
        DfDesc="Governments, Corporations, ISPs, Organizations and Agencies are taking control of the internet and monitor all your activities. How this works is that these ISPs or Government authorities log your browsing history based on your IP Address. Now here is what hide.me VPN does for you, it provides you an IP of another country which will help you hide your browsing activities. hide.me offers servers in more than 30 countries to make sure you can access any website securely"
      />
      <ImageGrid cardCss="col-sm-12 col-lg-6 ImgC" img="SectionFe3__img bg" />
    </LayoutGrid>
  );
}

export default SectionFe3;
