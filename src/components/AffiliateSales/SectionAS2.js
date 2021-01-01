import React from "react";
import LayoutContainer from "../Shared/LayoutContainer";
import { Cards } from "./data";
import InfoTxt from "../Shared/Text/TextInfoNew";
import Botton from "../UI/Button/ButtonNew";

function SectionAS2() {
  return (
    <LayoutContainer section="SectionAS2">
      <InfoTxt
        txt="AffiliateSales.section_2"
        textAlign="center"
        color="black"
        margin="0px"
        klasa="SectionAS2__txt"
        DfTitle="Why Should you Join our VPN Affiliate Network"
        DfDesc="Are you ready to EARN UP TO in 7 days like one of our affilitaes?"
      />
      <div className="row justify-content-center">
        {Cards.map(({ title, desc }, idx) => (
          <div className="SectionAS2__box" key={idx}>
            <div className={`SectionAS2__box__img${idx + 1} bg`} />
            <div>
              <h5>{title}</h5>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Botton
          link="SectionAS4"
          offsetBtn={-150}
          txt="AffiliateSales.section_2.btn"
          BGcolor="#8878BF"
          color="#fff"
          margin="10px"
          HoverBGcolor="#fff"
          HoverColor="#000"
          border="1px solid #8878BF"
          HoverBorder="1px solid #000"
          DfBtn="Start earning now"
        />
      </div>
    </LayoutContainer>
  );
}

export default SectionAS2;
