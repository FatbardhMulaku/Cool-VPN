import React from "react";
import LayoutContainer from "../Shared/LayoutContainer";
import { FormattedMessage } from "react-intl";

function SectionBP3() {
  return (
    <LayoutContainer section="SectionBP3 bg">
      <h6>
        <FormattedMessage
          id="BecomePartner.section_3.title"
          defaultMessage="Complement your product or service offering with CoolVPN. A personal VPN has 
						become a necessity for every security-conscious user. CoolVPN will be a great 
						addition to your product bundle offering."
        />
      </h6>
    </LayoutContainer>
  );
}

export default SectionBP3;
