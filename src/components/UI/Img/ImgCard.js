import React from "react";
import Zoom from "react-reveal/Zoom";

const ImgCard = (props) => {
  return (
    <div className={props.cardCss}>
      <Zoom>
        <div className={`img_css ${props.img}`}> </div>
      </Zoom>
    </div>
  );
};

export default ImgCard;
