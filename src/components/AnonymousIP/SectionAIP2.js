import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import { FormattedMessage } from "react-intl";
import InfoTxt from "../Shared/Text/TextInfoNew";

function SectionAIP2() {
  return (
    <LayoutGrid section="SectionAIP2">
      <div className="SectionAIP2__img1 bg" />
      <div className="col-lg-3" />
      <div className="col-sm-12 col-lg-9 SectionAIP2__box1">
        <InfoTxt
          txt="AnonymousIP.section_2"
          textAlign="left"
          color="black"
          margin="0px"
          klasa="SectionPA2__txt"
          DfTitle="Just how safe you right now?"
          DfDesc="You will get a dedicated account manager, sales support, and 
					marketing materials. We'll help you with anything you may need 
					along the way."
        />
        <a href="/what-is-CoolVPN">
          <FormattedMessage
            id="AnonymousIP.section_2.link1"
            defaultMessage="Read more"
          />
        </a>
      </div>

      <div className="col-sm-12 col-lg-9 SectionAIP2__box2">
        <h3>
          <FormattedMessage
            id="AnonymousIP.section_2.title2"
            defaultMessage="You’re Being watched"
          />
        </h3>
        <p>
          <FormattedMessage
            id="AnonymousIP.section_2.desc2"
            defaultMessage="You will use an intuitive reseller dashboard. This will be your place, dedicated to purchasing licenses and managing clients with ease."
          />
        </p>
        <a href="/what-is-CoolVPN">
          <FormattedMessage
            id="AnonymousIP.section_2.link2"
            defaultMessage="Read more"
          />
        </a>
      </div>
      <div className="SectionAIP2__img2 bg" />

      <div className="SectionAIP2__img3 bg">
        <div className="bg" />
      </div>
      <div className="col-lg-3" />
      <div className="col-sm-12 col-lg-9 SectionAIP2__box3">
        <InfoTxt
          txt="AnonymousIP.section_2c"
          textAlign="left"
          color="black"
          margin="0px"
          klasa="SectionPA2__txt"
          DfTitle="Get a new digital identity with CoolVPN"
          DfDesc="CoolVPN is a versatile product. It supports all major platforms (Windows, macOS, iOS, Android, and Linux), and secures up to 6 devices at the same time."
        />
        <a href="/what-is-CoolVPN">
          <FormattedMessage
            id="AboutUs.section_2.link3"
            defaultMessage="Read more"
          />
        </a>
      </div>
    </LayoutGrid>
  );
}

export default SectionAIP2;
