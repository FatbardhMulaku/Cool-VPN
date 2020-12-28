import React from 'react';
import { useTranslation } from "react-i18next";
import LayoutContainer from "../Shared/LayoutContainer"
import ListItem from "../Shared/Text/TextList";
import Flip from 'react-reveal/Flip';

function SectionS5() {
	const { t } = useTranslation();
	return (
		<LayoutContainer section="SectionS5 bg">
			<h3>{t("Support.section_5.title")}</h3>
			<Flip top >
			<div className="SectionS5__box">
				<ListItem txt="Support.section_5.items1" klasa="SectionS5__line"/>
				<ListItem txt="Support.section_5.items2" klasa="SectionS5__line" />
			</div>
			</Flip>
		</LayoutContainer>
	)
}

export default SectionS5
