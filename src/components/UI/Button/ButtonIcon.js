import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import * as Scroll from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	btn: {
	  backgroundColor:(props) => props.BGcolor,
	  borderRadius:"8px",
	  padding:"8px 25px",
	  border:(props) => props.border,
	  color:(props) => props.color,
	  fontWeight:"bold",
	  margin:(props) => props.margin,
	  "& > .MuiButton-label": {
		textTransform: "capitalize",
		
		fontFamily: " Arial, Helvetica, sans-serif",
		fontSize:"16px",
	  },
	  "&:hover": {
		backgroundColor:(props) => props.HoverBGcolor,
		color:(props) => props.HoverColor,
		border:(props) => props.HoverBorder,
		"& > span > svg": {
		  animation: `$icone-effect 0.8s ease-in-out infinite`,
		},
	  },
	  [theme.breakpoints.down('sm')]: {
		padding:"5px 10px",
		fontSize:"12px",
		marginLeft:"auto",
		marginRight:"auto"
	  }
	},
	"@keyframes icone-effect": {
	  "100%": {
		transform: "translate(0, 0)",
	  },
	  "50%": {
		transform: "translate(5px, 0)",
	  },
	},
  }));

function ButtonIcon(props) {
	const { t } = useTranslation();
	const classes = useStyles(props);
	let ScrollLink = Scroll.Link;

	const linkPath = props.link != null ? props.link : "";

	const link = linkPath.includes("/");
	const linkScroll = {
		spy: true,
		smooth: true,
		offset: props.offset,
		duration: 500,
		isDynamic: true,
	};
	return (
		<Button
		variant="contained"
		component={link ? LinkRouter : ScrollLink}
		className={classes.btn}
		to={linkPath}
		{...(!link && linkScroll)}
		>
		<i className={props.icon}></i>
		{t(`${props.txt}`)}
		</Button>
	)
}

export default ButtonIcon;