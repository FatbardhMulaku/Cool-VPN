import React from "react";
import { FormattedMessage } from "react-intl";
import LayoutContainer from "../Shared/LayoutContainer";

function SectionPA4() {
  return (
    <LayoutContainer section="SectionPA4">
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <h3>
            <FormattedMessage
              id="PressArea.section_4.title"
              defaultMessage="Our scope of expertise"
            />
          </h3>
          <p>
            <FormattedMessage
              id="PressArea.section_4.desc1"
              defaultMessage="CoolVPN has dedicated experts who are ready to comment on the following topics: internet privacy, cybersecurity, data breaches, hacks, digital literacy, online services and products, VPN market, etc."
            />
          </p>
          <p>
            <FormattedMessage
              id="PressArea.section_4.desc2"
              defaultMessage="You can find a great variety of our experts’ advice and opinions on the CoolVPN blog."
            />
          </p>
        </div>
        <div className="col-sm-12 col-lg-3">
          <div className="SectionPA4__img1 bg" />
        </div>
      </div>
    </LayoutContainer>
  );
}

export default SectionPA4;
