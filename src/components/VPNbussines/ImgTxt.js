import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: (props) => props.textAlign,
    color: (props) => props.color,
    margin: (props) => props.margin,
    [theme.breakpoints.down("sm")]: {
      /* padding:(props) => props.Smallpadding, */
      marginLeft: "0px",
      marginRight: "0px",
    },
  },
  img: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      marginBottom: "30px",
    },
  },
  box: {
    backgroundColor: (props) => props.BoxBgGcolor,
    border: (props) => props.BoxBorder,
    color: (props) => props.BoxColor,
    padding: "40px 30px",
  },
}));

function ImgTxt(props) {
  const classes = useStyles(props);
  return (
    <div className={`ImgTxt row`}>
      <div className={`${classes.box1} ${props.box1}`}></div>
      {/* ImgTxt__box1 */}
      <div className={`${classes.box} ${props.box}`}>
        {" "}
        {/* ImgTxt__box */}
        <div className="ImgTxt__box__img">
          <div className={`${props.icon} bg`} />
        </div>
        <div
          className={` ${classes.root} TextInfo ImgTxt__txt my-auto ${props.klasaTxt}`}
        >
          <h4 className="font_roboto text-capitalize font-w-600">
            <FormattedMessage
              id={`${props.txt}.title`}
              defaultMessage={props.Dtitle}
            />
          </h4>
          <p className="font_p my-4">
            <FormattedMessage
              id={`${props.txt}.desc`}
              defaultMessage={props.Ddesc}
            />
          </p>
        </div>
      </div>
      <div className={`${classes.box1} ${props.box2}`}></div>
    </div>
  );
}

export default ImgTxt;
