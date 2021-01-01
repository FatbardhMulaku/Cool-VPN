import React from "react";
import { FormattedMessage } from "react-intl";
import { makeStyles } from "@material-ui/core/styles";
import LayoutContainer from "../Shared/LayoutContainer";
import Flip from "react-reveal/Flip";
import { List1, List2 } from "./data";

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

function SectionS5() {
  const classes = useStyles();
  return (
    <LayoutContainer section="SectionS5 bg">
      <h3>
        <FormattedMessage
          id="Support.section_5.title"
          defaultMessage="Popular Support Topics"
        />
      </h3>
      <Flip top>
        <div className="SectionS5__box">
          <div>
            {List1.map(({ title }, index) => (
              <div key={index} className={`${classes.root} SectionS5__line`}>
                <div className={`bg ${classes.img}`}></div>
                <p className={classes.txt}>{title}</p>
              </div>
            ))}
          </div>
          <div>
            {List2.map(({ title }, index) => (
              <div key={index} className={`${classes.root} SectionS5__line`}>
                <div className={`bg ${classes.img}`}></div>
                <p className={classes.txt}>{title}</p>
              </div>
            ))}
          </div>
        </div>
      </Flip>
    </LayoutContainer>
  );
}

export default SectionS5;
