import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import InfoTxt from "../Shared/Text/TextInfoNew";
import Botton from "../UI/Button/ButtonNew";

function SectionAS4() {
  return (
    <LayoutGrid section="SectionAS4">
      <div className="col-sm-12 col-lg-6">
        <InfoTxt
          txt="AffiliateSales.section_4"
          textAlign="left"
          color="black"
          margin="0px"
          klasa="SectionAS4__txt"
          DfTitle="Here’s How from CoolVPN Made $1000 in 18 days"
          DfDesc="The best affiliates are popular bloggers focused on reviews, security, privacy, geo-restricted content, expat living, and high-tech areas. Other success avenues include large Facebook groups, YouTube channels, and newsletter lists."
        />
        <div>
          <Botton
            link="/become-partner"
            offsetBtn={-150}
            txt="AffiliateSales.section_4.btn"
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
      </div>
      <div className="col-sm-12 col-lg-6">
        <div className="SectionAS4__img bg mx-auto" />
      </div>
    </LayoutGrid>
  );
}

export default SectionAS4;
