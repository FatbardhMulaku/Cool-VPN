import React from "react";
import { FormattedMessage } from "react-intl";
import LayoutContainer from "../Shared/LayoutContainer";
import InfoTxt from "../Shared/Text/TextInfoNew";
import { FreeProxy } from "./data";

function SectionFP3() {
  return (
    <LayoutContainer section="SectionFP3 bg">
      <InfoTxt
        txt="FreeProxy.section_3"
        textAlign="center"
        color="white"
        margin="0px"
        klasa="SectionFP3__txt"
        DfTitle="CoolVPN benefits for secure browsing"
        DfDesc="Encrypt your Internet traffic to browse securely and privately."
      />
      <div className="SectionFP3__Bbox">
        <div className="row justify-content-center SectionFP3__line">
          <div className="col-6 col-lg-3"></div>
          <div className="col-3 col-lg-3">
            <h5>
              <FormattedMessage
                id="FreeProxy.section_3.desc1"
                defaultMessage="Cool VPN"
              />
            </h5>
          </div>
          <div className="col-3 col-lg-3">
            <h5>
              <FormattedMessage
                id="FreeProxy.section_3.desc2"
                defaultMessage="Free VPN"
              />
            </h5>
          </div>
        </div>

        {FreeProxy.map(({ title }, idx) => (
          <div
            key={idx}
            className="row justify-content-center SectionFP3__line"
          >
            <div className="col-6 col-lg-3">
              <p>{title}</p>
            </div>
            <div className="col-3 col-lg-3">⬤</div>
            <div className="col-3 col-lg-3">⭘</div>
          </div>
        ))}
      </div>
    </LayoutContainer>
  );
}

export default SectionFP3;
