import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, List, Divider, IconButton } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useTranslation } from "react-i18next";
import "./MobileMenu.css";
import MobileMenuItem from "./MobileMenuItem";
import Item1 from "../MobileMenu/item1";
import Item2 from "../MobileMenu/Item2";
import { mainMenu } from "../Navigation/data";

const useStyles = makeStyles((theme) => ({
  drawer: {
    "& > .MuiDrawer-paper": {
      width: "225px !important",
    },
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#696869",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
    "& > button": {
      outline: "none",
    },
  },
  list: {
    display: "flex",
    flexFlow: "column",
    backgroundColor: "#696869",
    "& >div:nth-child(2)": {
      order: "1 !important",
    },
    "& >div:nth-child(3)": {
      order: "2 !important",
    },
  },
}));
const MobileMenu = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();
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
        <IconButton onClick={props.drawerToggle}>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <Divider />
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
          name={t("whatIsVPN.name")}
          drawerToggle={props.drawerToggle}
          panel="whatIsVPN"
          expanded={expanded}
          handleChange={handleChange}
        />
        <Item2
          key={2}
          name={t("Product.name")}
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
