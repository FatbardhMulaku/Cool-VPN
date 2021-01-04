import React from "react";
import { FormattedMessage } from "react-intl";
import LayoutContainer from "../Shared/LayoutContainer";
import InfoTxt from "../Shared/Text/TextInfoNew";
import { forLine } from "./data";

function SectionPA6() {
  return (
    <LayoutContainer section="SectionPA6">
      <InfoTxt
        txt="PressArea.section_6"
        textAlign="center"
        color="black"
        margin="0px"
        klasa="SectionPA2__txt"
        DfTitle="Media assets"
        DfDesc="Use our brand resources provided below. We are happy to help you and guide or answer any questions"
      />
      <div className="row SectionPA6__line my-2 my-lg-3">
        <div>
          <div className="SectionPA6__line--img bg" />
        </div>
        <div>
          <div className="SectionPA6__line--img2 bg" />
          <h6>
            <FormattedMessage
              id="PressArea.section_6.title2"
              defaultMessage="Screenshots and mock-ups"
            />
          </h6>
        </div>
      </div>
      <div className="col SectionPA6__txt">
        {forLine.map(({ txt }, idx) => (
          <div key={idx}>
            <p>{txt}</p>
          </div>
        ))}
      </div>
    </LayoutContainer>
  );
}

export default SectionPA6;
