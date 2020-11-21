import React from "react";
import Button from "../../UI/Button/Button";
import { useTranslation } from "react-i18next";
import "./TextGrid.css";
import Fade from 'react-reveal/Fade';

const TextGridWhite = (props) => {
  const { t } = useTranslation();
  return (
    <div className={`col-sm-12 col-lg-6 textGrid ${props.textCss}`}>
      <Fade left >
        <h2 className="font_roboto text-white text-capitalize font-w-600">
          {t(`${props.tr}.title`)}
        </h2>
        <p className="font_p text-white my-4">{t(`${props.tr}.desc`)}</p>
        <Button link={props.linkBtn} offset={props.offsetBtn} 
          txt={props.btnTxt}
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