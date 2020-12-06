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
import "./MobileMenu.css";
import { paramCase } from "change-case";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
	  width: "100%",
	  boxShadow: "none",
	  margin: "0 !important",
	  backgroundColor:"#696869",
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
	  backgroundColor:"#fff",
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
	  backgroundColor: "#",
	  margin: "0 10px",
	  padding: "0px",
	},
	litsItem: {
	  padding: "5px 10px",
	},
	listText: {
	  backgroundColor: "#fff !important",
	},
	subpanel:{
		backgroundColor:"#fff",
		color:"black",
	},
	subtitle:{
		fontWeight:"Bold",
		marginLeft:"2px"
	}
  }));

const Item2 = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
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
            <p className="link mb-0 text-black">{props.name}</p>
          </AccordionSummary>
        </ListItemText>
      </ListItem>
      <AccordionDetails className={classes.accDetails}>
	  <div key={2} className={`${classes.subpanel} item1_mobile `}>
	  <div className={classes.subpanel}>
          <h6 className={`${classes.subtitle} col_black font-roboto`}>
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

		<div className={classes.subpanel}>
          <h6 className={`${classes.subtitle} col_black font-roboto`}>
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
		<div className={classes.subpanel}>
          <h6 className={`${classes.subtitle} col_black font-roboto`}>
            {t("Product.ItemName3")}
          </h6>
          <ul className="industries_popper_info">
            {t("Product.ItemMenu3").map((item, index) => (
              <li key={index}>
                <Link to={`/${paramCase(item.link)}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div> 

		<div className={classes.subpanel}>
          <h6 className={`${classes.subtitle} col_black font-roboto`}>
            {t("Product.ItemName4")}
          </h6>
          <ul className="industries_popper_info">
            {t("Product.ItemMenu4").map((item, index) => (
              <li key={index}>
                <Link to={`/${paramCase(item.link)}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div> 

		<div className={classes.subpanel}>
          <h6 className={`${classes.subtitle} col_black font-roboto`}>
            {t("Product.ItemName5")}
          </h6>
          <ul className="industries_popper_info">
            {t("Product.ItemMenu5").map((item, index) => (
              <li key={index}>
                <Link to={`/${paramCase(item.link)}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div> 
      </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default Item2;
