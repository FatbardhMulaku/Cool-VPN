import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, List, Divider, IconButton } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "./MobileMenu.css";
import MobileMenuItem from "./MobileMenuItem";
import Item1 from "../MobileMenu/item1";
import Item2 from "../MobileMenu/Item2";
import { mainMenu } from "../Navigation/data";
import {DropDown1,DropDown2} from "../../UI/Popper/data";

const useStyles = makeStyles((theme) => ({
  drawer: {
    padding:"100px 0",
    "& > .MuiDrawer-paper": {
      width: "285px !important",
      backgroundColor: "#2D2E2D",
    },
    "& > .makeStyles-drawer-122 ":{
      backgroundColor: "#2D2E2D",
    }
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#2D2E2D",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
    color:"white",
    "& >.MuiIconButton-label":{
      color:"white"
   },
   "& > .MuiIconButton-root":{
    color:"white"
 },
    "& > button": {
      outline: "none",
    },
  },
  list: {
    display: "flex",
    flexFlow: "column",
    backgroundColor: "#2D2E2D",
    padding:"20px 0",
    "& >div:nth-child(2)": {
      order: "1 !important",
    },
    "& >div:nth-child(3)": {
      order: "2 !important",
    },
  },
  ddivider:{
    backgroundColor:"white",
    color:"white",
    height:"2px"
  },
  title:{
    textAlign:"center !important",
    color:"white"
  }
}));
const MobileMenu = (props) => {
  const classes = useStyles(props);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Drawer
      open={props.isToggled}
      onClose={props.drawerToggle}
      anchor="right"
      className={classes.drawer}
      transitionDuration={1200}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={props.drawerToggle} className={classes.headIcon}>
          <ChevronRightIcon className={classes.headIcon}/>
          
        </IconButton>
      </div>
      <h4 className={classes.title}>CoolVPN</h4>
      <Divider className={classes.ddivider}/>
      <List className={classes.list}>
        {mainMenu.map(({ link, name }, index) => (
          <MobileMenuItem
            key={index}
            link={link}
            name={name}
            drawerToggle={props.drawerToggle}
          />
        ))}
        <Item1
          key={1}
          name={DropDown1}
          drawerToggle={props.drawerToggle}
          panel="whatIsVPN"
          expanded={expanded}
          handleChange={handleChange}
        />
        <Item2
          key={2}
          name={DropDown2}
          drawerToggle={props.drawerToggle}
          panel="Product"
          expanded={expanded}
          handleChange={handleChange}
        />
      </List>
      <Divider />
    </Drawer>
  );
};

export default MobileMenu;
