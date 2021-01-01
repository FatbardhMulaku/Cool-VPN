import React from "react";
import LayoutContainer from "../Shared/LayoutContainer";
import { FormattedMessage } from "react-intl";
import { infoCard } from "./data";

function SectionBP5() {
  return (
    <LayoutContainer section="SectionBP5">
      <h3>
        <FormattedMessage
          id="BecomePartner.section_4.title"
          defaultMessage="All you need to get started"
        />
      </h3>
      <div className="row mx-auto">
        {infoCard.map(({ title }, idx) => (
          <div className="SectionBP5--box" key={idx}>
            <div className={`SectionBP5--box__img${idx + 1} bg`} />
            <h5>{title}</h5>
          </div>
        ))}
      </div>
    </LayoutContainer>
  );
}

export default SectionBP5;
