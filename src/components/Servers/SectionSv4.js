import React from 'react';
import { useTranslation } from "react-i18next";
import TextInfo from "../Shared/Text/TextInfo";

function SectionSv4() {
	const { t } = useTranslation();
	return (
		<div className="SectionSv4 container">
			<TextInfo txt="Servers.section_4" textAlign="center" color="black" margin="0px" klasa="SectionSv2__txt"/>
			
			<div className="row justify-content-center">
				{t("Servers.section_4.items").map((item, index) => {
					return(
						<div key={index} className="SectionSv4__box">
							<div className={`SectionSv4__box--icon${index+1} bg`}/>
							<h5>{item.title}</h5>
							<p>{item.desc}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default SectionSv4;
