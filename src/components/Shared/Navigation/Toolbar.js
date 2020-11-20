import React from "react";
import { AppBar, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import NavList from "./NavList/NavList";
import LoginNav from "../LoginNav/LoginNav";
import Logo from "../../UI/Logo/Logo";
import DrawerToggle from "../DrawerToggle";
import "./Toolbar.css";

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px",
    alignItems: "center",
    paddingTop: "20px",
    color:'black'
  },
  box1: {
    boxShadow: "none ",
    backgroundColor:"transparent",
    transition: "all 0.6s ease-out",
    padding: "0 0 10px",
    top: "auto",
    color:"black"
  },
  box2: {
    backgroundColor:(props) => props.Bcolor,
    transition: "all 0.4s ease-in",
    padding: "0 0 8px",
    top: "auto",
  },
  [theme.breakpoints.down("xs")]: {
    box1: {
      padding: "0 0 5px !important",
    },
    box2: {
      padding: "0 !important",
    },
    appBar: {
      padding: "3px 0",
    },
  },
}));

const Toolbar = (props) => {
  const classes = useStyles(props);
  const { windowp } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: windowp ? window() : undefined,
  });

  return (
    <AppBar className={trigger ? classes.box2 : classes.box1}>
      <Container maxWidth="xl" className={classes.appBar}>
        <Logo
          logo={props.LogoL} // "black_logo" : "white_logo"
          text={props.ColorTxt} // "col_black" : "col_white"
        />
        <div className={`DesktopOnly ${props.ColorTxt}`}>
          <NavList ColorTXT={props.ColorT}/>
        </div>
        <div className="searchIcon">
          <div className="d-login">
            <LoginNav />
          </div>
        </div>
        <div className="DrawerToggle">
          <DrawerToggle clicked={props.drawerToggle} ColorButon={props.ColorBTN} />
        </div>
      </Container>
    </AppBar>
  );
};

export default Toolbar;
