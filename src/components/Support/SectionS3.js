import React from 'react';
import { useTranslation } from "react-i18next";
import LayoutContainer from "./../Shared/LayoutContainer";
import Button from "../UI/Button/Button"
import Zoom from 'react-reveal/Zoom';

function SectionS3() {
	const { t } = useTranslation();
	return (
		<LayoutContainer section="SectionS3">
			<h3>{t("Support.section_3.title") }</h3>
			<Zoom cascade> 
			<div className="row">
				{t("Support.section_3.items").map((item, index) => {
					return(
						<div key={index} className={`SectionS3_img${index+1}`}>
							<div className="SectionS3__logo bg"/>
							<p>{item.title}</p>
							<span>{item.desc}</span>
							<div className={`SectionS3__icon${index+1} bg`}/>
						</div>
					)
				})}
			</div>
			</Zoom>
			<div className="d-flex justify-content-center">
			<Button linkBtn="SectionS4" offsetBtn={-100} txt="Support.section_3.btn"
							BGcolor="#2D2E2D" color="#fff" margin="10px auto !important"
							HoverBGcolor="#fff" HoverColor="#2D2E2D"
							border="1px solid #2D2E2D"
							HoverBorder="1px solid #2D2E2D"/></div>
		</LayoutContainer>
	)
}

export default SectionS3;
