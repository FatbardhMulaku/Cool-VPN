import React from "react";
import Button from "../../UI/Button/Button";
import { useTranslation } from "react-i18next";
import Fade from 'react-reveal/Fade';

const TextGrid = (props) => {
  const { t } = useTranslation();
  return (
    <div className={`col-sm-12 col-lg-6 textGrid ${props.textCss}`}>
      <Fade left >
        <h2 className="font_roboto text-capitalize font-w-600">
          {t(`${props.tr}.title`)}
        </h2>
        <p className="font_p my-4">{t(`${props.tr}.desc`)}</p>
        <Button link={props.linkBtn} offset={props.offsetBtn} 
          txt={props.btnTxt}
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
