import React, { useState } from 'react';
import "./Style/index.scss";
import { useTranslation } from "react-i18next";
import Faq from "./../Pricing/faq";


function SectionD4() {
	const { t } = useTranslation();
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
	  setExpanded(isExpanded ? panel : false);
	};
	return (
		<div className="SectionPr3__full">
		<div className="SectionPr3 container">
			<h3 className="text-center">{t("Download.section_3.title")}</h3>

			<div className="row justify-content-center">
				{t("Download.section_3.items").map((item, index) => {
					return(
						<div key={index} className="SectionPr3__line col-12 col-md-7 justify-content-center">
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

export default SectionD4
