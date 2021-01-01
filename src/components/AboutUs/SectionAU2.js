import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import InfoTxt from "../Shared/Text/TextInfoNew";
import { FormattedMessage } from "react-intl";

function SectionAU2() {
  return (
    <LayoutGrid section="SectionAU2">
      <div className="SectionAU2__img1 bg" />
      <div className="col-lg-3" />
      <div className="col-sm-12 col-lg-9 SectionAU2__box1">
        <InfoTxt
          txt="AboutUs.section_2"
          textAlign="left"
          color="black"
          margin="0px"
          klasa="SectionPA2__txt"
          DfTitle="Who we are"
          DfDesc="In 2013, CoolVPN was an idea on a drawing board. Today, we're a leading VPN service - trusted by millions of consumers and thousands of businesses worldwide. Building on decades of professional experience, our team brings their expertise to a truly innovative cybersecurity company."
        />
        <a href="/what-is-CoolVPN">
          <FormattedMessage
            id="AboutUs.section_2.link1"
            defaultMessage="Read more"
          />
        </a>
      </div>

      <div className="col-sm-12 col-lg-9 SectionAU2__box2">
        <h3>
          <FormattedMessage
            id="AboutUs.section_2.title2"
            defaultMessage="What makes us special"
          />
        </h3>
        <p>
          <FormattedMessage
            id="AboutUs.section_2.desc1"
            defaultMessage="Our international team, made up of a diverse group of artists, athletes, and tech enthusiasts, is united by our common goal to make cybersecurity easy, accessible, and user-friendly for all. Fundamental to that goal are the principles of innovation, collaboration, and trust."
          />
        </p>
        <a href="/what-is-CoolVPN">
          <FormattedMessage
            id="AboutUs.section_2.link2"
            defaultMessage="Read more"
          />
        </a>
      </div>
      <div className="SectionAU2__img2 bg" />

      <div className="SectionAU2__img3 bg" />
      <div className="col-lg-3" />
      <div className="col-sm-12 col-lg-9 SectionAU2__box3">
        <InfoTxt
          txt="AboutUs.section_2b"
          textAlign="left"
          color="black"
          margin="0px"
          klasa="SectionPA2__txt"
          DfTitle="The CoolVPN Mission"
          DfDesc="At CoolVPN, our mission is to provide secure, private, and uncensored Internet access to anyone, anywhere. To do so, we push boundaries and seek to develop the next generation of easy-to-use cybersecurity products and applications."
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

export default SectionAU2;
