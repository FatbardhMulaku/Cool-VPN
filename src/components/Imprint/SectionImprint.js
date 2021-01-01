import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import InfoTxt from "../Shared/Text/TextInfoNew";

function SectionImprint() {
  return (
    <LayoutGrid section="SectionRS1 bg">
      <InfoTxt
        txt="Imprint.section_1"
        textAlign="left"
        color="white"
        margin="0px"
        klasa="SectionAIP1__txt col-sm-12 col-lg-5"
        DfTitle="Imprint"
        DfDesc="We don’t leave you in mid air 24/7 support via live chat, Tickets, FAQs, Emails & our Community."
      />
    </LayoutGrid>
  );
}

export default SectionImprint;
