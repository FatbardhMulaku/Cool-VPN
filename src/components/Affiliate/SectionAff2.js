import React from "react";
import LayoutContainer from "../Shared/LayoutContainer";
import { FormattedMessage } from "react-intl";
import { FirstThreeCards, SecondThreeCards } from "./data";

function SectionAff2() {
  return (
    <LayoutContainer section="SectionAff2">
      <h3>
        <FormattedMessage
          id="Affiliate.section_2.title1a"
          defaultMessage="Why join the CoolVPN affiliate program?"
        />
      </h3>
      <div className="row justify-content-center">
        {FirstThreeCards.map(({ title, desc }, idx) => (
          <div className="SectionAff2--box shadow" key={idx}>
            <div className={`SectionAff2--box__img${idx + 1} bg`} />
            <div>
              <h5>{title}</h5>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h3>
        <FormattedMessage
          id="Affiliate.section_2.title2a"
          defaultMessage="Your commission with our payout models"
        />
      </h3>

      <div className="row justify-content-center">
        {SecondThreeCards.map(({ title, desc }, idx) => (
          <div className="SectionAff2--box2 shadow" key={idx}>
            <div>
              <h5>{title}</h5>
              <p>{desc}</p>
            </div>
            <div className={`SectionAff2--box2__img${idx + 1} bg`} />
          </div>
        ))}
      </div>
    </LayoutContainer>
  );
}

export default SectionAff2;
