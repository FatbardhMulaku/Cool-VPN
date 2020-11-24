import React from 'react';
import "./Styles/SectionB1.css"
import { useTranslation } from "react-i18next";

function SectionB1() {
	const { t } = useTranslation();
	return (
		<div className="SectionB1 bg">
			<h3 className="container">{t("Blog.section_1.title")}</h3>
		</div>
	)
}

export default SectionB1;
