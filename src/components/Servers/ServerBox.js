import React from 'react';
import "./Style/index.scss";
import { useTranslation } from "react-i18next";
import ListItem from "../Shared/Text/TextList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	title:{
		textAlign:(props) => props.textAlign,
		color:"#000 !important",
		marginBottom:"15px",
		[theme.breakpoints.down('sm')]: {
			/* padding:(props) => props.Smallpadding, */
			textAlign:"center",
			fontSize:"18px"
		  }
	},
	box:{
		backgroundColor:(props) => props.BoxBgGcolor,
		border:(props) => props.BoxBorder,
		color:(props) => props.BoxColor,
	}
  }));

function ServerBox(props) {
	const { t } = useTranslation();
	const classes = useStyles(props);
	return (
		<div className="SectionSv2 container">
			<h4 className={classes.title}>{t(`Servers.section_2.subtitle.${props.titulli}`)}</h4>
			<div className="row">
				<div className={`${classes.box1} ${props.box1}`}></div>{/* SectionSv2__box1 */}
				<div className={`${classes.box} ${props.box}`} >  {/* SectionSv2__box */}
				{t("Servers.section_2.info").map((item, index) => {
					return(
						<div key={index+1} className="SectionSv2__box--list">
							<div>
								<div>
									<h5>{item.title}</h5>
									<div className={`SectionSv2__iconCountry${index+1}`} />
									<div className={`${props.arrowIcon} bg`}/>
								</div>
								<p>1885 servers</p>
							</div>
							<ListItem txt={`Servers.section_2.items${index+1}`} icon={props.listIcon}/>
						</div>
					);
				})}
				</div>
				<div className={`${classes.box1} ${props.box2}`}></div>
			</div>

		</div>
	)
}

export default ServerBox;
       