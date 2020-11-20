import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import "./TextInfo.css";

const useStyles = makeStyles((theme) => ({
	root: {
	  textAlign:(props) => props.textAlign,
	  color:(props) => props.color,
	  margin:(props) => props.margin,
	  [theme.breakpoints.down('sm')]: {
		/* padding:(props) => props.Smallpadding, */
	  }
	}
  }));

function TextInfo(props) {
	const { t } = useTranslation();
	const classes = useStyles(props);
	return (
		<div className={`${classes.root} TextInfo`}>
			<h2 className="font_roboto text-capitalize font-w-600">{t(`${props.txt}.title`)}</h2>
       	 	<p className="font_p my-4">{t(`${props.txt}.desc`)}</p>
		</div>
	)
}

export default TextInfo;
