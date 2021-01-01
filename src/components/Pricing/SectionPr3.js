import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Faqs } from "./data";
import Faq from "./faq";

function SectionPr3() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="SectionPr3__full">
      <div className="SectionPr3 container">
        <h3>
          <FormattedMessage id="Pricing.section_3.title" defaultMessage="FAQ" />
        </h3>

        <div className="row">
          {Faqs.map(({ title, desc }, index) => (
            <div key={index} className="SectionPr3__line col-sm-12 col-lg-6">
              <Faq
                key={index}
                index={index}
                expanded={expanded}
                handleChange={handleChange}
                icon="SectionPr3__icon"
                name={title}
                answer={desc}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionPr3;
