import React from 'react';
import "./Styles/SectionH2.css";
import { useTranslation } from "react-i18next";

function SectionH2() {
	const { t } = useTranslation();
	return (
		<div className="SectionH2 row mx-auto">
			<hr className="SectionH2__hr"/>
			{t("Home.section_2").map((item, index) => {
					return( 
						<div key={index} className="SectionH2__Box mx-auto">
							<div className={`SectionH2_icon${index+1} mx-auto bg`}/>
							<h6>{item.title}</h6>
							<p>{item.desc}</p>
						</div>
					);
				})}
		</div>
	)
}

export default SectionH2;
