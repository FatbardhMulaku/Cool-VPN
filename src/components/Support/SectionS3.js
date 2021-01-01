import React from "react";
import { FormattedMessage } from "react-intl";
import LayoutContainer from "./../Shared/LayoutContainer";
import Button from "../UI/Button/ButtonNew";
import Zoom from "react-reveal/Zoom";
import { CardList } from "./data";

function SectionS3() {
  return (
    <LayoutContainer section="SectionS3">
      <h3>
        <FormattedMessage
          id="Support.section_3.title"
          defaultMessage="CoolVPN video tutorials"
        />
      </h3>
      <Zoom cascade>
        <div className="row">
          {CardList.map(({ title, desc }, index) => (
            <div key={index} className={`SectionS3_img${index + 1}`}>
              <div className="SectionS3__logo bg" />
              <p>{title}</p>
              <span>{desc}</span>
              <div className={`SectionS3__icon${index + 1} bg`} />
            </div>
          ))}
        </div>
      </Zoom>
      <div className="d-flex justify-content-center">
        <Button
          linkBtn="SectionS4"
          offsetBtn={-100}
          txt="Support.section_3.btn"
          BGcolor="#2D2E2D"
          color="#fff"
          margin="10px auto !important"
          HoverBGcolor="#fff"
          HoverColor="#2D2E2D"
          border="1px solid #2D2E2D"
          HoverBorder="1px solid #2D2E2D"
          DfBtn="Learn more"
        />
      </div>
    </LayoutContainer>
  );
}

export default SectionS3;
