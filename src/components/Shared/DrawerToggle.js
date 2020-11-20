import React from "react";
import DehazeIcon from "@material-ui/icons/Dehaze";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const useStyles = makeStyles((theme) => ({
  button: {
    "&:focus": {
      outline: "none",
    },
  },
  svg: {
    fontSize: "2.1rem",
    color:(props) => props.ColorButon,
  },
  colorBTN: {
    color:(props) => props.ColorButon,
  },
  [theme.breakpoints.down("xs")]: {
    svg: {
      fontSize: "1.5rem",
    },
  },
}));
const DrawerToggle = (props) => {
  const classes = useStyles(props);

  const { window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: window ? window() : undefined,
  });
  return (
    <IconButton className={classes.button} onClick={props.clicked}>
      <DehazeIcon
        className={classes.svg}
      />
    </IconButton>
  );
};

export default DrawerToggle;
