import React from 'react';
import { useTranslation } from "react-i18next";
import Fade from 'react-reveal/Fade';

function SectionH2() {
	const { t } = useTranslation();
	return (
		<div className="SectionH2 row mx-auto">
			<hr className="SectionH2__hr"/>
			<Fade bottom cascade>
			{t("Home.section_2").map((item, index) => {
					return( 
						<div key={index} className="SectionH2__Box">
							<div className={`SectionH2_icon${index+1} bg`}/>
							<h6>{item.title}</h6>
							<p>{item.desc}</p>
						</div>
					);
				})}
			</Fade>
		</div>
	)
}

export default SectionH2;
