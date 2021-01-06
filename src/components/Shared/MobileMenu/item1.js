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
import GroupListM from "./GroupListM";
import { whatIsVPN } from "../../UI/Popper/data";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    boxShadow: "none",
    margin: "0 !important",
    backgroundColor: "#2D2E2D",
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
    backgroundColor: "#2D2E2D",
    borderBottom:"1px solid #fff",
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
    backgroundColor: "#000 !important",
  },
  subpanel: {
    backgroundColor: "#000",
    color: "white",
  },
  subtitle: {
    fontWeight: "Bold",
    marginLeft: "2px",
  },
  headIcon:{
    color:"white"
  }
}));

const Item1 = (props) => {
  const classes = useStyles();
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
            expandIcon={<ExpandMoreIcon className={classes.headIcon}/>}
            aria-controls={props.name}
            id={props.name}
          >
            <p className="link mb-0 text-black">{props.name}</p>
          </AccordionSummary>
        </ListItemText>
      </ListItem>
      <AccordionDetails className={classes.accDetails}>
        <div key={1} className={`${classes.subpanel} item1_mobile `}>
          {whatIsVPN.map((item, index) => (
            <GroupListM
              key={index}
              id={index}
              title={item.title}
              list={item.items}
            />
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default Item1;
