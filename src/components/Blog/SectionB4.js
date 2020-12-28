import React from 'react';
import { Route } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import PostInfo from "./PostInfo";
import TextInfo from "../Shared/Text/TextInfo";
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
	root: {
		marginLeft:"auto",
		marginRight:"auto",
	  '& > *': {
		marginTop: theme.spacing(2),
	  },
	},
  }));

const Post = [0, 1, 2, 3]

function SectionB4() {
	const { t } = useTranslation();
	const classes = useStyles();
	return (
		<div className="SectionB4 container">
			<h5>{t("Blog.section_4.title")}</h5>
			<Fade bottom > 
			{Post.map((index) =>{
				return(
					<Route key={index} render={({ history}) => (
					<div key={index} className="SectionB4__wrapper container" onClick={() => { history.push('/blog-in-depth') }}>
						<div className={`SectionB4__img${index+1} bg my-auto`}/>
						<div className="SectionB2__txt">
							<TextInfo txt={`Blog.section_4.item${index+1}`} textAlign="left" color="#2D2E2D" margin="0px" klasa="SectionB4__info"/>
							<PostInfo margin="20px 0 0 0"/>
						</div>
					</div>
					 )} />
				)
			})}
			</Fade>
			<div className={classes.root}>
			<Pagination count={10} variant="outlined" />
			</div>
		</div>
	)
}

export default SectionB4;
