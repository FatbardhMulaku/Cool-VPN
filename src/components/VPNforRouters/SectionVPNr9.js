import React, { useState } from "react";
import LayoutContainer from "../Shared/LayoutContainer";
import { FormattedMessage } from "react-intl";
import { Faqs, Faqs2 } from "./data";
import Faq from "../FAQ/faqs";

function SectionVPNr9() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <LayoutContainer section="SectionVPNr9 bg">
      <h2>
        <FormattedMessage
          id="VPNforRouters.section_9.title1x"
          defaultMessage="FAQ"
        />
      </h2>
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <div className="col">
            {Faqs.map(({ title, desc }, idx) => (
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
        <div className="col-sm-12 col-lg-6">
          <div className="col">
            {Faqs2.map(({ title, desc }, idx) => (
              <Faq
                key={idx + 10}
                index={idx + 10}
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

export default SectionVPNr9;
