import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    textAlign: "center",
    borderRadius: "10px",
    "&:hover": {
      boxShadow: "0 4px 7px rgba(0,0,0,0.3)",
    },
    transition: "$boxShadow 0.3s ease-in-out",
    "& > p": {
      color: "#b2b2b2",
    },
  },
  paper1: {
    "& > h4": {
      fontWeight: "600",
    },
  },
  paper2: {
    width: "280px",
    height: "280px",
    margin: "1rem 0",
    "& > h4": {
      fontWeight: "500",
    },
    [theme.breakpoints.down("md")]: {
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

const Card = (props) => {
  const classes = useStyles();
  let propsClass = classes[props.card];

  return (
    <Paper elevation={1} className={`${classes.paper}  ${props.Class}`}>
      <div className={props.cardCss}>
        <div className={`img_css ${props.img}`}> </div>
      </div>
      <h4 className="font_helvetica col_black "> {props.title} </h4>
      <p className="font-roboto"> {props.desc} </p>
    </Paper>
  );
};

export default Card;
