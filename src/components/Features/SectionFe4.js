import React from "react";
import LayoutGrid from "./../Shared/LayoutGrid";
import TextGrid from "../Shared/Text/TextGridWhite";
import ImageGrid from "../UI/Img/ImgCard";

function SectionFe4() {
  return (
    <div className="Purple__bg">
      <LayoutGrid section="SectionFe4">
        <ImageGrid cardCss="col-sm-12 col-lg-6 ImgC" img="SectionFe4__img bg" />
        <TextGrid
          textCss="SectionFe_text"
          tr="Features.section_4"
          btnId="Features.section_4.btn"
          btnTxt="Read More"
          linkBtn="SectionFe5"
          DfTitle="Avoid Censorship"
          DfDesc="Government and law enforcement agencies love to monitor social media websites like Facebook, Twitter YouTube etc. If you live in a country where social media sites are censored, all you need to do is connect to hide.me server and should able to visit social media websites without someone monitoring your activities"
        />
      </LayoutGrid>
    </div>
  );
}

export default SectionFe4;
