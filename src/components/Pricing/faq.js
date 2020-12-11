import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MdExpandMore } from "react-icons/md";
import "./Styles/index.scss";
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "10px auto",
	border:"1px solid #2D2E2D",
	borderRadius: "20px !important",
	"&:hover":{
	  boxShadow:"0px 2px 8px 0px rgba(0, 0, 0, 0.99)"
	},
    "&:before": {
      height: "0",
      content: "none",
    },
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 4px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  },
  accSummary: {
    "& > .MuiAccordionSummary-content": {
	  margin: "20px 0 15px 0",
	  color:"black"
    },
  },
  question: {
    fontSize: "1rem",
    fontWeight: "600",
  },
  img:{
	  borderRadius:"50%"
  },
  detalShow:{
	  display:"flex",
	  flexDirection:"column"
  }
}));

function Faq(props) {
	const classes = useStyles();
	return (
		<Fade big cascade>		
		<Accordion
		className={classes.root}
		expanded={props.expanded === props.name + props.index}
		onChange={props.handleChange(props.name + props.index)}
		>
		<AccordionSummary
			expandIcon={<MdExpandMore size="35px" className="acc__icon" />}
			id={props.name + props.index}
			aria-controls={props.name}
			className={classes.accSummary}
		>
			<Typography className={classes.question}>{props.question}</Typography>
			<div className="Faq__box">
				<div className={`${props.icon} bg ${classes.img}`}></div>
				<h5>&#9679;{props.name}</h5>
			</div>
		</AccordionSummary>
		<AccordionDetails className={classes.detalShow}>
			<Typography className="answer_style"> {props.answer} </Typography>
		</AccordionDetails>
		</Accordion>
		</Fade>
	)
}

export default Faq;
