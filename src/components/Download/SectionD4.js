import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import Faq from "./../Pricing/faq";
import { Faqs } from "./data";

function SectionD4() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="SectionPr3__full">
      <div className="SectionPr3 container">
        <h3 className="text-center">
          <FormattedMessage
            id="Download.section_3.title"
            defaultMessage="Frequently asked questions"
          />
        </h3>

        <div className="row justify-content-center">
          {Faqs.map(({ title, desc }, index) => (
            <div
              key={index}
              className="SectionPr3__line col-12 col-md-7 justify-content-center"
            >
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

export default SectionD4;
