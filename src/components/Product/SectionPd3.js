import React from "react";
import Zoom from "react-reveal/Zoom";
import { FormattedMessage } from "react-intl";
import LayoutContainer from "../Shared/LayoutContainer";
import { BrowserList } from "./data";

function SectionPd3() {
  return (
    <LayoutContainer section="SectionPd3">
      <h3>
        <FormattedMessage
          id="Product.section_3.title1z"
          defaultMessage="VPN extensions for your favorite browsers"
        />
      </h3>
      <Zoom cascade>
        <div className="row justify-content-center">
          {BrowserList.map(({ title }, idx) => (
            <div className="SectionPd3__box shadow" key={idx}>
              <div className={`SectionPd3__box__img${idx + 1} bg`} />
              <h6>{title}</h6>
            </div>
          ))}
        </div>
      </Zoom>
    </LayoutContainer>
  );
}

export default SectionPd3;
