import React from 'react';
import "./Styles/SectionB1.css"
import { useTranslation } from "react-i18next";
import Fade from 'react-reveal/Fade';

function SectionB1() {
	const { t } = useTranslation();
	return (
		<div className="SectionB1 bg">
			<Fade top big cascade>
			<h2 className="container">{t("Blog.section_1.title")}</h2>
			</Fade>
		</div>
	)
}

export default SectionB1;
