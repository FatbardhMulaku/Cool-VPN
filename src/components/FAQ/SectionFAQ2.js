import React, { useState } from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import Botton from "../UI/Button/ButtonNew";
import Faq from "./faqs";
import { faqs, BtbGroup } from "./data";

function SectionFAQ2() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <LayoutGrid section="SectionFAQ2">
      <div className="col-sm-12 col-lg-3 SectionFAQ2__btnBox">
        <Botton
          link="/faq/#"
          offsetBtn={-150}
          txt="FAQ.section_2.btn1a"
          BGcolor="#D57FAD"
          color="#fff"
          margin="10px"
          HoverBGcolor="#8878BF"
          HoverColor="#fff"
          border="1px solid #D57FAD"
          HoverBorder="1px solid #8878BF"
          DfBtn="General"
        />

        {BtbGroup.map(({ btn }, idx) => (
          <Botton
            key={idx}
            link="/faq/#"
            offsetBtn={-150}
            txt={`FAQ.section_2.btn${idx + 1}`}
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
          {faqs.map(({ title, desc }, idx) => (
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
    </LayoutGrid>
  );
}

export default SectionFAQ2;
