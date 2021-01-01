import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MdExpandMore } from "react-icons/md";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "10px auto",
    borderRadius: "20px !important",
    backgroundColor: "#8878BF",
    "&:hover": {
      boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.99)",
    },
  },
  accSummary: {
    "& > .MuiAccordionSummary-content": {
      margin: "0",
      color: "black",
    },
  },
  img: {
    borderRadius: "50%",
  },
  detalShow: {
    display: "flex",
    flexDirection: "column",
    color: "white",
  },
}));

function Faqs(props) {
  const classes = useStyles();
  return (
    <Fade bottom cascade>
      <Accordion
        className={classes.root}
        expanded={props.expanded === props.name + props.index}
        onChange={props.handleChange(props.name + props.index)}
      >
        <AccordionSummary
          expandIcon={<MdExpandMore size="35px" className="more__icon" />}
          id={props.name + props.index}
          aria-controls={props.name}
          className={classes.accSummary}
        >
          <div className="faqs__box">
            <h5>{props.name}</h5>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.detalShow}>
          <Typography className="answerFaqs"> {props.answer} </Typography>
        </AccordionDetails>
      </Accordion>
    </Fade>
  );
}

export default Faqs;
