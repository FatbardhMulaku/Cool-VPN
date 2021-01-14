import React from "react";
import Zoom from "react-reveal/Zoom";
import { FormattedMessage } from "react-intl";

function SectionWV5() {
  return (
    <div className="SectionWV5 bg">
      <Zoom>
      <div className="SectionWV5__wrapper container">
        <h3>
          <FormattedMessage
            id="WhatIsVPN.section_5.title1"
            defaultMessage="Increase your security"
          />
        </h3>

        <div className="row">
          <div className="col-sm-12 col-lg-2">
            <div className="SectionWV5__img1 bg" />
          </div>
          <div className="col-sm-12 col-lg-5">
            <p>
              <FormattedMessage
                id="WhatIsVPN.section_5.desc"
                defaultMessage="Using a VPN changes your IP address, the unique number that identifies you and your location in the world. With a new IP address, you can browse the internet as if you were in the UK, Germany, Canada, Japan, or virtually any country, if the VPN service has servers there"
              />
            </p>
          </div>
        </div>
      </div>
      </Zoom>
    </div>
  );
}

export default SectionWV5;
