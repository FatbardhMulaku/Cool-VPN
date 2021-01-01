import React from "react";
import LayoutContainer from "../Shared/LayoutContainer";
import { FormattedMessage } from "react-intl";
import { earnCard } from "./data";

function SectionBP2() {
  return (
    <LayoutContainer section="SectionBP2">
      <h3>
        <FormattedMessage
          id="BecomePartner.section_2.title"
          defaultMessage="How much will you earn?"
        />
      </h3>
      <div className="row mx-auto">
        {earnCard.map(({ title, desc }, idx) => (
          <div className="SectionBP2--box" key={idx}>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </LayoutContainer>
  );
}

export default SectionBP2;
