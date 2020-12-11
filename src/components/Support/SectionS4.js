import React from 'react';
import "./Styles/SectionS4.css"
import { useTranslation } from "react-i18next";
import LayoutContainer from "./../Shared/LayoutContainer";
import Bounce from 'react-reveal/Bounce';

function SectionS4() {
	const { t } = useTranslation();
	return (
		<LayoutContainer section="SectionS4">
			<h3>{t("Support.section_4.title") }</h3>
			<Bounce cascade>
			<div className="row justify-content-center">
				{t("Support.section_4.items").map((item, index) => {
					return(
						<div key={index} className={`SectionS4_box${index+1}`}>
							<div className={`SectionS4_img${index+1} bg`}/>
							<p>{item.title}</p>
						</div>
					)
				})}
			</div>
			</Bounce>
		</LayoutContainer>
	)
}

export default SectionS4;
