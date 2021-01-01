import React from "react";
import Button from "../../UI/Button/ButtonNew";
import { FormattedMessage } from "react-intl";
import Fade from "react-reveal/Fade";

const TextGrid = (props) => {
  return (
    <div className={`col-sm-12 col-lg-6 textGrid ${props.textCss}`}>
      <Fade left>
        <h2 className="font_roboto text-capitalize font-w-600">
          <FormattedMessage
            id={`${props.tr}.title`}
            defaultMessage={props.DfTitle}
          />
        </h2>
        <p className="font_p my-4">
          <FormattedMessage
            id={`${props.tr}.desc`}
            defaultMessage={props.DfDesc}
          />
        </p>
        <Button
          link={props.linkBtn}
          offset={props.offsetBtn}
          txt={props.btnId}
          DfBtn={props.btnTxt}
          BGcolor="#2D2E2D"
          color="#fff"
          HoverBGcolor="transparent"
          HoverColor="#2D2E2D"
          border="1px solid black"
          margin="10px"
          HoverBorder="1px solid #2D2E2D"
        />
      </Fade>
    </div>
  );
};

export default TextGrid;
