import React from "react";
import Roll from 'react-reveal/Roll';
import { FormattedMessage } from "react-intl";
import LayoutContainer from "../Shared/LayoutContainer";
import { Steps } from "./data";

function SectionPd4() {
  return (
    <LayoutContainer section="SectionPd4">
      <h3>
        <FormattedMessage
          id="Product.section_4.title"
          defaultMessage="How to download a VPN app in 3 steps"
        />
      </h3>
      <Roll cascade>
      <div className="row justify-content-center">
        {Steps.map(({ title }, idx) => (
          <div className="SectionPd4__box " key={idx}>
            <h2>{idx + 1}</h2>
            <div>
              <div className={`SectionPd4__box__img${idx + 1} bg mx-auto`} />
              <div>
                <p>{title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </Roll>
    </LayoutContainer>
  );
}

export default SectionPd4;
