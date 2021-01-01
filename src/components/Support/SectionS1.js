import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import { FormattedMessage } from "react-intl";
import Fade from "react-reveal/Fade";

function SectionS1() {
  return (
    <LayoutGrid section="SectionS1" id="sectionS-1">
      <Fade top big>
        <div className="SectionS1_wrapper">
          <h3 className="col_white font-helvetica">
            <FormattedMessage
              id="Support.section_1.title"
              defaultMessage="Search CoolVPN Support"
            />
          </h3>
          <form className="SectionS1_box justify-content-center">
            <input
              type="text"
              placeholder="Type your question here.."
              required
            />
            <button type="submit">
              <div className="SectionS1_icon bg" />
            </button>
          </form>
        </div>
      </Fade>
    </LayoutGrid>
  );
}

export default SectionS1;
