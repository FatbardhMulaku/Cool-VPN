import React from "react";
import LayoutContainer from "../Shared/LayoutContainer";
import Fade from "react-reveal/Fade";
import { FormattedMessage } from "react-intl";

function SectionTu1() {
  return (
    <LayoutContainer section="SectionTu1">
      <Fade top big>
        <h3 className="col_white font-helvetica">
          <FormattedMessage
            id="Tutorials.section_1.title"
            defaultMessage="How can we help you?"
          />
        </h3>
        <p>
          <FormattedMessage
            id="Tutorials.section_1.desc"
            defaultMessage="Get simple and secure remote access from the world’s most trusted VPN brand"
          />
        </p>
        <form className="SectionS1_box justify-content-center">
          <input
            type="text"
            placeholder="Type relevant keywords and press enter to get the answers"
            required
          />
          <button type="submit">
            <div className="SectionS1_icon bg" />
          </button>
        </form>
      </Fade>
    </LayoutContainer>
  );
}

export default SectionTu1;
