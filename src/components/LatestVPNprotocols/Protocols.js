import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormattedMessage } from "react-intl";
import { List } from "./data"

const useStyles = makeStyles((theme) => ({
	root: {
	  backgroundColor:(props) => props.BGcolor,
	  border: (props) => props.border,
	  borderRadius: "15px",
	  "&:hover": {
		boxShadow: "0 4px 7px rgba(0,0,0,0.3)",
		backgroundColor:(props) => props.hover,
	  },
	  transition: "$boxShadow 0.3s ease-in-out",
	  "& > p": {
		color: "#6d6d6d",
		borderBottom: "1px solid black",
		paddingBottom:"15px",
		lineHeight:"1.7",
		fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
		marginBottom:"0px !important",
		fontSize:"15px",
		[theme.breakpoints.down("md")]: {
			fontSize:"14px",
		  },
	  },
	},
	Pcolor:{
		color:(props) => props.color,
	}
  }));

function Protocols(props) {
	const classes = useStyles(props);
	return (
		<div className={`${classes.root} ${props.BGcolor} Protocols`}>
			<div className="Protocols__head">
				<div>
					<h3><FormattedMessage
						id={`${props.txt}.title`}
						defaultMessage={props.title}
					/></h3>
					<div className="Protocols__img bg my-auto"></div>
				</div>
				<div>
					<div className="Protocols__win bg"/>
					<p><FormattedMessage
						id="Protocols.win"
						defaultMessage="Windows PC"
					/></p>
					<div className="Protocols__linux bg"/>
					<p><FormattedMessage
						id="Protocols.linux"
						defaultMessage="Ubuntu"
					/></p>
				</div>
			</div>
			<p className={classes.Pcolor}><FormattedMessage
				id={`${props.txt}.desc`}
				defaultMessage={props.desc}
			/></p>
			<div className="row justify-content-around">
				{List.map(({ title}, idx) => (
					<div  key={idx} className="Protocols__box">
						<p>{title}</p>
						<div className="Protocols__img bg mx-auto"/>
					</div>
				))}
			</div>
		</div>
	)
}

export default Protocols;
