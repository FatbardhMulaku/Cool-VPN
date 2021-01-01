import React from "react";
import { FormattedMessage } from "react-intl";
import LayoutContainer from "../Shared/LayoutContainer";
import { CardList } from "./data";

function SectionVPNr3() {
  return (
    <LayoutContainer section="SectionVPNr3 bg">
      <h3>
        <FormattedMessage
          id="VPNforRouters.section_3.title"
          defaultMessage="How to protect your home Wi-Fi with a VPN router in 3 easy steps"
        />
      </h3>
      <div className="row justify-content-center">
        {CardList.map(({ desc }, idx) => (
          <div className="SectionVPNr3__box " key={idx}>
            <h1>{idx + 1}</h1>
            <div>
              <div className={`SectionVPNr3__box__img${idx + 1} bg mx-auto`} />
              <div>
                <p>{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </LayoutContainer>
  );
}

export default SectionVPNr3;
