import React from "react";
import { FormattedMessage } from "react-intl";
import LayoutContainer from "./../Shared/LayoutContainer";
import Bounce from "react-reveal/Bounce";
import { TxtList } from "./data";

function SectionS4() {
  return (
    <LayoutContainer section="SectionS4">
      <h3>
        <FormattedMessage
          id="Support.section_4.title"
          defaultMessage="Can’t find what you are looking for?"
        />
      </h3>
      <Bounce cascade>
        <div className="row justify-content-center">
          {TxtList.map(({ title }, index) => (
            <div key={index} className={`SectionS4_box${index + 1}`}>
              <div className={`SectionS4_img${index + 1} bg`} />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </Bounce>
    </LayoutContainer>
  );
}

export default SectionS4;
