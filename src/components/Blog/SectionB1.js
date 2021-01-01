import React from "react";
import { FormattedMessage } from "react-intl";
import Fade from "react-reveal/Fade";

function SectionB1() {
  return (
    <div className="SectionB1 bg">
      <Fade top big cascade>
        <h2 className="container">
          <FormattedMessage
            id="Blog.section_1.title1"
            defaultMessage="Discover our blog"
          />
        </h2>
      </Fade>
    </div>
  );
}

export default SectionB1;
