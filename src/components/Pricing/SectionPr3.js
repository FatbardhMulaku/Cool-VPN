import React, { useState } from 'react';
import "./Styles/index.scss";
import { useTranslation } from "react-i18next";
import Faq from "./faq";

function SectionPr3() {
	const { t } = useTranslation();
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
	  setExpanded(isExpanded ? panel : false);
	};
	return (
		<div className="SectionPr3__full">
		<div className="SectionPr3 container">
			<h3>{t("Pricing.section_3.title")}</h3>

			<div className="row">
				{t("Pricing.section_3.items").map((item, index) => {
					return(
						<div key={index} className="SectionPr3__line col-sm-12 col-lg-6">
							<Faq 
								key={index}
								index={index}
								expanded={expanded}
								handleChange={handleChange}
								icon="SectionPr3__icon"
								name={item.name}
								answer={item.answer}
							/>
						</div>
					)
				})}
			</div>
		</div>
		</div>
	)
}

export default SectionPr3;
