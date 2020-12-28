import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles((theme) => ({
	root: {
	  textAlign:(props) => props.textAlign,
	  color:(props) => props.color,
	  margin:(props) => props.margin,
	  [theme.breakpoints.down('sm')]: {
		/* padding:(props) => props.Smallpadding, */
		marginLeft:"0px",
		marginRight:"0px"
	  }
	}
  }));

function TextInfo(props) {
	const classes = useStyles(props);
	return (
		<div className={`${classes.root} TextInfo ${props.klasa}`}>
			<h2 className="font_roboto text-capitalize font-w-600">
				<FormattedMessage
					id={`${props.txt}.title`}
					defaultMessage={props.DfTitle}
				/>
			</h2>
       	 	<p className="font_p my-4">
				<FormattedMessage
					id={`${props.txt}.desc`}
					defaultMessage={props.DfDesc}
				/>
			</p>
		</div>
	)
}

export default TextInfo;