import React from "react";
import LayoutContainer from "./../Shared/LayoutContainer";
import TextInfo from "../Shared/Text/TextInfoNew";
import Card from "../UI/Card/Card";
import { CardList } from "./data";

function SectionFe1() {
  return (
    <LayoutContainer section="SectionFe1">
      <TextInfo
        txt="Features.section_1"
        textAlign="left"
        color="#2D2E2D"
        margin="0px"
        klasa="SectionFe1__txt"
        DfTitle="Why use a VPN?"
        DfDesc="What to do in times when the cyber world is dominated by instances of snooping and mass data collection? When your data is on sale? In scenarios like that, only a VPN can help you improve your online security and privacy"
      />

      <div className="row justify-content-around">
        {CardList.map(({ title, desc }, index) => (
          <Card
            key={index}
            Class="SectionFe1__box"
            title={title}
            card="paper2"
            desc={desc}
            cardCss="SectionFe1_icon_box"
            img={`SectionFe1_icon${index + 1} bg`}
          />
        ))}
      </div>
      <TextInfo
        txt="Features.section_1.info"
        textAlign="left"
        color="#2D2E2D"
        margin="0px"
        klasa="SectionFe1__txt2 my-3"
        DfTitle="Benefits of a VPN"
        DfDesc="There are countless benefits of using a VPN. Some of the most common are listed below."
      />
    </LayoutContainer>
  );
}

export default SectionFe1;
