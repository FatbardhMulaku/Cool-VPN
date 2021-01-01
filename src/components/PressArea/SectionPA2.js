import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import InfoTxt from "../Shared/Text/TextInfoNew";
import { FormattedMessage } from "react-intl";

function SectionPA2() {
  return (
    <LayoutGrid section="SectionPA2">
      <div className="SectionPA2__img1 bg" />
      <div className="col-lg-3" />
      <div className="col-sm-12 col-lg-9 SectionPA2__box1">
        <InfoTxt
          txt="PressArea.section_2"
          textAlign="left"
          color="black"
          margin="0px"
          klasa="SectionPA2__txt"
          DfTitle="What CoolVPN is"
          DfDesc="CoolVPN is a leading online security solution, used by over 14 million internet users worldwide. We offer next-generation encryption with advanced privacy features to ensure secure access to all your favorite online resources.Our users can choose from a wide range of 5300 servers in 59 countries"
        />
        <a href="/what-is-CoolVPN">
          <FormattedMessage
            id="PressArea.section_2.link1"
            defaultMessage="Read more"
          />
        </a>
      </div>

      <div className="col-sm-12 col-lg-9 SectionPA2__box2">
        <h3>
          <FormattedMessage
            id="PressArea.section_2.title2"
            defaultMessage="What makes us special"
          />
        </h3>
        <ul>
          <li>
            <FormattedMessage
              id="PressArea.section_2.desc1"
              defaultMessage="CoolVPN maintains a strict no-logs policy, which means we do not collect and store any logs of our users’ activity. The fact was confirmed by an industry-first audit on no-logging claims."
            />
          </li>
          <li>
            <FormattedMessage
              id="PressArea.section_2.desc2"
              defaultMessage="Our users get a lot more than just a VPN solution. CyberSec, DoubleVPN, SmartPlay, and Onion Over VPN are just some of the extra features that our customers enjoy."
            />
          </li>
        </ul>
        <a href="/what-is-CoolVPN">
          <FormattedMessage
            id="PressArea.section_2.link2"
            defaultMessage="Read more"
          />
        </a>
      </div>
      <div className="SectionPA2__img2 bg" />
    </LayoutGrid>
  );
}

export default SectionPA2;
