import React from "react";
import { FormattedMessage } from "react-intl";
import LayoutContainer from "../Shared/LayoutContainer";
import { forCards } from "./data";

function SectionPA3() {
  return (
    <LayoutContainer section="SectionPA3 bg">
      <h3>
        <FormattedMessage
          id="PressArea.section_3.title"
          defaultMessage="Our product family"
        />
      </h3>
      <div className="row justify-content-center">
        {forCards.map(({ title, desc }, idx) => (
          <div className="SectionPA3--box shadow" key={idx}>
            <div className={`SectionPA3--box__img${idx + 1} bg`} />
            <div>
              <h5>{title}</h5>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </LayoutContainer>
  );
}

export default SectionPA3;
