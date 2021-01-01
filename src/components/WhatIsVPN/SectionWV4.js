import React from "react";
import { FormattedMessage } from "react-intl";

function SectionWV4() {
  return (
    <div className="SectionWV4 container">
      <h3>
        <FormattedMessage
          id="WhatIsVPN.section_4.title"
          defaultMessage="Change your location"
        />
      </h3>
      <div className="row">
        <div className="col-sm-12 col-lg-5">
          <p>
            <FormattedMessage
              id="WhatIsVPN.section_4.desc"
              defaultMessage="Using a VPN changes your IP address, the unique number that identifies you and your location in the world. With a new IP address, you can browse the internet as if you were in the UK, Germany, Canada, Japan, or virtually any country, if the VPN service has servers there"
            />
          </p>
        </div>
        <div className="col-sm-12 col-lg-2">
          <div className="SectionWV4__img1 bg" />
        </div>
      </div>
    </div>
  );
}

export default SectionWV4;
