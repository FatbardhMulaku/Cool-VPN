import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import InfoTxt from "../Shared/Text/TextInfoNew";

function SectionArt3() {
  return (
    <LayoutGrid section="SectionArt3">
      <div className="col-sm-12 col-lg-7">
        <InfoTxt
          txt="Articles.section_3a"
          textAlign="left"
          color="black"
          margin="10px 0 0 0"
          klasa="SectionArt3__txt"
          DfTitle="1. Bulk messaging"
          DfDesc="Messages with the same or similar text can be sent out to a group of people in a short period of time. Several spam accounts can also simultaneously post duplicate messages."
        />
      </div>
      <div className="col-sm-12 col-lg-5"></div>
      <div className="col-sm-12 col-lg-5"></div>
      <div className="col-sm-12 col-lg-7">
        <InfoTxt
          txt="Articles.section_3b"
          textAlign="left"
          color="black"
          margin="10px 0 0 0"
          klasa="SectionArt3__txt"
          DfTitle="2. Spreading malicious links"
          DfDesc="Malicious links are links created with the intent to harm, mislead or damage a user or their device. When the link is clicked, activities triggered can range from downloading malware to stealing personal information."
        />
      </div>
      <div className="col-sm-12 col-lg-7">
        <InfoTxt
          txt="Articles.section_3c"
          textAlign="left"
          color="black"
          margin="10px 0 0 0"
          klasa="SectionArt3__txt"
          DfTitle="3. Sharing undesired or excessive content"
          DfDesc="Fake accounts can also contact and share unwarranted content such as insults, threats and unwanted advertising to genuine users. Bots can be set up to automatically follow new users or automatically message users who post content."
        />
      </div>
      <div className="col-sm-12 col-lg-5"></div>
    </LayoutGrid>
  );
}

export default SectionArt3;
