import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, List, Divider, IconButton } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useTranslation } from "react-i18next";
import "./MobileMenu.css";
import MobileMenuItem from "./MobileMenuItem";
import DropItem from "./DropItem";
import LoginNav from "../LoginNav/LoginNav";

const useStyles = makeStyles((theme) => ({
  drawer: {
    "& > .MuiDrawer-paper": {
      width: "225px !important",
    },
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
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
    "& >div:nth-child(2)": {
      order: "1 !important",
    },
    "& >div:nth-child(3)": {
      order: "2 !important",
    },
  },
}));

const dropDownItems = ["industries", "about"];

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
        {t("mainMenu").map(({ link, name }, index) => (
          <MobileMenuItem
            key={index}
            link={link}
            name={name}
            drawerToggle={props.drawerToggle}
          />
        ))}
        {dropDownItems.map((item, index) => {
          return (
            <DropItem
              key={index}
              drawerToggle={props.drawerToggle}
              name={t(`${item}Popper.name`)}
              items={t(`${item}Popper.${item}Menu`)}
              panel={item}
              expanded={expanded}
              handleChange={handleChange}
            />
          );
        })}
      </List>
      <Divider />
      <LoginNav />
    </Drawer>
  );
};

export default MobileMenu;
