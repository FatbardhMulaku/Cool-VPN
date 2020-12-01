import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItemText,
  ListItem,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { NavLink } from "react-router-dom";
import "./MobileMenu.css";
import { paramCase } from "change-case";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    boxShadow: "none",
    margin: "0 !important",
    "&:before": {
      height: "0",
    },
    "& > .MuiCollapse-entered": {
      marginTop: "-9px !important",
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accSummary: {
    padding: "4px 10px",
    "& > .MuiAccordionSummary-content": {
      margin: "0",
    },
    "& > .MuiIconButton-root": {
      padding: "1px",
    },
    "& > .MuiIconButton-edgeEnd": {
      marginLeft: "0",
      marginRight: "0",
    },

    minHeight: "100% !important",
  },
  accDetails: {
    display: "flex",
    flexFlow: "column",
    backgroundColor: "#f8f8f8",
    margin: "0 10px",
    padding: "2px 0",
  },
  litsItem: {
    padding: "5px 10px",
  },
  listText: {
    backgroundColor: "#f5f5f5a6 !important",
  },
}));

const DropItem = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <>
    <Accordion
      className={classes.root}
      expanded={props.expanded === props.panel}
      onChange={props.handleChange(props.panel)}
    >
      <ListItem button className={classes.litsItem}>
        <ListItemText className={classes.listText}>
          <AccordionSummary
            className={classes.accSummary}
            expandIcon={<ExpandMoreIcon />}
            aria-controls={props.name}
            id={props.name}
          >
            <p className="link mb-0">{props.name}</p>
          </AccordionSummary>
        </ListItemText>
      </ListItem>
       <AccordionDetails className={classes.accDetails}>
       <div>
          <h6 className="col_black font-roboto">
            {t("whatIsVPN.ItemName1")}
          </h6>
          <ul className="industries_popper_info">
            {t("whatIsVPN.ItemMenu1").map((item, index) => (
              <li key={index}>
                <Link to={`/${paramCase(item.link)}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h6 className="col_black font-roboto">
            {t("whatIsVPN.ItemName2")}
          </h6>
          <ul className="industries_popper_info">
            {t("whatIsVPN.ItemMenu2").map((item, index) => (
              <li key={index}>
                <Link to={`/${paramCase(item.link)}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </AccordionDetails>
    </Accordion>


    <Accordion
      className={classes.root}
      expanded={props.expanded === props.panel}
      onChange={props.handleChange(props.panel)}
    >
      <ListItem button className={classes.litsItem}>
        <ListItemText className={classes.listText}>
          <AccordionSummary
            className={classes.accSummary}
            expandIcon={<ExpandMoreIcon />}
            aria-controls={props.name}
            id={props.name}
          >
            <p className="link mb-0">{props.name}</p>
          </AccordionSummary>
        </ListItemText>
      </ListItem>
       <AccordionDetails className={classes.accDetails}>
       <div>
          <h6 className="col_black font-roboto">
            {t("Product.ItemName1")}
          </h6>
          <ul className="industries_popper_info">
            {t("Product.ItemMenu1").map((item, index) => (
              <li key={index}>
                <Link to={`/${paramCase(item.link)}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h6 className="col_black font-roboto">
            {t("Product.ItemName2")}
          </h6>
          <ul className="industries_popper_info">
            {t("Product.ItemMenu2").map((item, index) => (
              <li key={index}>
                <Link to={`/${paramCase(item.link)}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </AccordionDetails>
    </Accordion>
    </>
  );
};

export default DropItem;
