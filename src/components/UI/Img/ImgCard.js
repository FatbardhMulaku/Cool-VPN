import React from "react";

const ImgCard = (props) => {
  return (
    <div className={props.cardCss}> 
      <div className={`img_css ${props.img}`}> </div>
    </div>
  );
};

export default ImgCard;
