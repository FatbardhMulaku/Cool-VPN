import React, { useState } from "react";
import LayoutContainer from "../Shared/LayoutContainer";
import Botton from "../UI/Button/ButtonNew";
import Faq from "../FAQ/faqs";
import { tutorials, BtbGroup } from "./data";
import InfoTxt from "../Shared/Text/TextInfoNew";

function SectionTu2() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <LayoutContainer section="SectionTu2">
      <InfoTxt
        txt="Tutorials.section_1"
        textAlign="center"
        color="black"
        margin="5px"
        klasa="SectionTu2__txt"
        DfTitle="VPN Setup Tutorials"
        DfDesc="Learn how to set up a VPN on a wide range of platforms. This category contains tutorials for apps to ensure a secure VPN setup for the best privacy."
      />
      <div className="row">
        <div className="col-sm-12 col-lg-3 SectionTu2__btnBox">
          <Botton
            link="/tutorials/#"
            offsetBtn={-150}
            txt="Tutorials.section_2.btn"
            BGcolor="#D57FAD"
            color="#fff"
            margin="10px"
            HoverBGcolor="#8878BF"
            HoverColor="#fff"
            border="1px solid #D57FAD"
            HoverBorder="1px solid #8878BF"
            DfBtn="VPN Setup Tutorials"
          />

          {BtbGroup.map(({ btn }, idx) => (
            <Botton
              key={idx}
              link="/tutorials/#"
              offsetBtn={-150}
              txt={`Tutorials.section_2.btn${idx + 2}`}
              BGcolor="#fff"
              color="#000"
              margin="10px"
              HoverBGcolor="#D57FAD"
              HoverColor="#fff"
              border="1px solid #fff"
              HoverBorder="1px solid #D57FAD"
              DfBtn={btn}
            />
          ))}
        </div>
        <div className="col-sm-12 col-lg-9 SectionFAQ2__faqBox">
          <div className="col">
            {tutorials.map(({ title, desc }, idx) => (
              <Faq
                key={idx}
                index={idx}
                expanded={expanded}
                handleChange={handleChange}
                name={title}
                answer={desc}
              />
            ))}
          </div>
        </div>
      </div>
    </LayoutContainer>
  );
}

export default SectionTu2;
