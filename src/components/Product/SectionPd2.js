import React from "react";
import Roll from 'react-reveal/Roll';
import { FormattedMessage } from "react-intl";
import LayoutContainer from "../Shared/LayoutContainer";
import { SystemList } from "./data";

function SectionPd2() {
  return (
    <LayoutContainer section="SectionPd2">
      <h3>
        <FormattedMessage
          id="Product.section_1.title1z"
          defaultMessage="Download a VPN app and protect any device"
        />
      </h3>
      <Roll cascade>
        <div className="row justify-content-center">
          {SystemList.map(({ title }, idx) => (
            <div className="SectionPd2__box shadow" key={idx}>
              <div className={`SectionPd2__box__img${idx + 1} bg`} />
              <h6>{title}</h6>
            </div>
          ))}
        </div>
      </Roll>
    </LayoutContainer>
  );
}

export default SectionPd2;
