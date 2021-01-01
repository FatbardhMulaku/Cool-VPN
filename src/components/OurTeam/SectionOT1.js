import React from "react";
import LayoutContainer from "../Shared/LayoutContainer";
import { FormattedMessage } from "react-intl";

function SectionOT1() {
  return (
    <LayoutContainer section="SectionOT1 bg">
      <h2 className="col_white font-helvetica">
        <FormattedMessage
          id="OurTeam.section_1.title"
          defaultMessage="Meet our Team"
        />
      </h2>
    </LayoutContainer>
  );
}

export default SectionOT1;
