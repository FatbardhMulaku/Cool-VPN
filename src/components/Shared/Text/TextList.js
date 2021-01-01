import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "8px 0",
    [theme.breakpoints.down("sm")]: {
      /* padding:(props) => props.Smallpadding, */
    },
  },
  img: {
    marginRight: "15px",
  },
  txt: {
    margin: "0px",
  },
}));

function TextList(props) {
  const { t } = useTranslation();
  const classes = useStyles(props);

  return (
    <div>
      {t(`${props.txt}`).map((item, index) => {
        return (
          <div key={index} className={`${classes.root} ${props.klasa}`}>
            <div
              className={`${props.icon} ${item.icon} bg ${classes.img}`}
            ></div>
            <p className={classes.txt}>{item.txt}</p>
          </div>
        );
      })}
    </div>
  );
}

export default TextList;
