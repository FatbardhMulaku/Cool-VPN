import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    margin: (props) => props.margin,
    [theme.breakpoints.down("sm")]: {
      margin: "0px !important",
    },
  },
  p1: {
    fontWeight: "bold",
    margin: "0px",
  },
  p2: {
    fontSize: "13px",
    margin: "0px",
  },
}));

function PostInfo(props) {
  const classes = useStyles(props);
  return (
    <div className={`${classes.root} ${props.klasa}`}>
      <div className="SectionB2__icon bg my-auto" />
      <div>
        <p className={classes.p1}>Isabella Smith</p>
        <p className={classes.p2}>Aug 07, 2020 </p>
      </div>
    </div>
  );
}

export default PostInfo;
