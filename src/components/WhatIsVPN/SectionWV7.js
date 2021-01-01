import React from "react";
import { FormattedMessage } from "react-intl";
import { lineCards } from "./data";
import LayoutContainer from "../Shared/LayoutContainer";

function SectionWV7() {
  return (
    <LayoutContainer section="SectionWV7">
      <h3>
        <FormattedMessage
          id="WhatIsVPN.section_7.title"
          defaultMessage="Types of VPN"
        />
      </h3>
      <div className="row">
        {lineCards.map(({ title, desc }, idx) => (
          <div className="SectionWV7--box" key={idx}>
            <div className={`SectionWV7__img${idx + 1} bg`} />
            <div>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </LayoutContainer>
  );
}

export default SectionWV7;
