import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import { FormattedMessage } from "react-intl";

function SectionPA5() {
  return (
    <LayoutGrid section="SectionPA5">
      <div className="col-sm-12 col-lg-3">
        <div className="SectionPA5__img1 bg" />
      </div>
      <div className="col-sm-12 col-lg-5">
        <h3>
          <FormattedMessage
            id="PressArea.section_5.title"
            defaultMessage="Security efforts"
          />
        </h3>
        <p>
          <FormattedMessage
            id="PressArea.section_5.desc1"
            defaultMessage="We are always working hard to make sure you are protected online. Our efforts are led by a team of 170+ tech experts, including programmers, security specialists, and IT architects."
          />
        </p>
        <p>
          <FormattedMessage
            id="PressArea.section_5.desc2"
            defaultMessage="Here’s what we’re doing to give you the most secure VPN experience."
          />
        </p>
      </div>
    </LayoutGrid>
  );
}

export default SectionPA5;
