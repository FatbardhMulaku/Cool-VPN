import React from 'react';
import { useTranslation } from "react-i18next";
import LayoutContainer from "./../Shared/LayoutContainer";
import TextInfo from "../Shared/Text/TextInfo";
import Card from "../UI/Card/Card";

function SectionFe1() {
	const { t } = useTranslation();
	return (
		<LayoutContainer section="SectionFe1">
			<TextInfo txt="Features.section_1" textAlign="left" color="#2D2E2D" margin="0px" klasa="SectionFe1__txt"/>

			<div className="row justify-content-around">
				{t("Features.section_1.items").map((item, index) => (
					<Card
					key={index}
					Class="SectionFe1__box"
					title={item.title}
					card="paper2"
					desc={item.desc}
					cardCss="SectionFe1_icon_box"
					img={`SectionFe1_icon${index + 1} bg`}
					/>
				))}
			</div>
			<TextInfo txt="Features.section_1.info" textAlign="left" color="#2D2E2D" margin="0px" klasa="SectionFe1__txt2"/>
		</LayoutContainer>
	)
}

export default SectionFe1;
