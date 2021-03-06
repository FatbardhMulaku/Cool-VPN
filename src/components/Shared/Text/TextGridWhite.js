import React from "react";
import Button from "../../UI/Button/ButtonNew";
import { FormattedMessage } from "react-intl";
import Fade from 'react-reveal/Fade';

const TextGridWhite = (props) => {
  return (
    <div className={`col-sm-12 col-lg-6 textGrid ${props.textCss}`}>
      <Fade left >
        <h2 className="font_roboto text-white text-capitalize font-w-600">
            <FormattedMessage
              id={`${props.tr}.title`}
              defaultMessage={props.DfTitle}
            />
        </h2>
        <p className="font_p text-white my-4">
          <FormattedMessage
            id={`${props.tr}.desc`}
            defaultMessage={props.DfDesc}
          />
        </p>
        <Button link={props.linkBtn} offset={props.offsetBtn} 
          txt={props.btnId}
          DfBtn={props.btnTxt}
          BGcolor="white"
          color="#2D2E2D"
          HoverBGcolor="#2D2E2D"
          HoverColor="white"
          border="1px solid black"
          margin="10px"
          HoverBorder="1px solid white"
        />
      </Fade>
    </div>
  );
};
export default TextGridWhite;