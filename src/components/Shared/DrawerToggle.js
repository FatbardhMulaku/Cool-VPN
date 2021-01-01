import React from "react";
import DehazeIcon from "@material-ui/icons/Dehaze";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    "&:focus": {
      outline: "none",
    },
  },
  svg: {
    fontSize: "2.1rem",
    color: (props) => props.ColorButon,
  },
  colorBTN: {
    color: (props) => props.ColorButon,
  },
  [theme.breakpoints.down("xs")]: {
    svg: {
      fontSize: "1.5rem",
    },
  },
}));
const DrawerToggle = (props) => {
  const classes = useStyles(props);

  return (
    <IconButton className={classes.button} onClick={props.clicked}>
      <DehazeIcon className={classes.svg} />
    </IconButton>
  );
};

export default DrawerToggle;
