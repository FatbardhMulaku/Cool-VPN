import React from 'react';
import "./Styles/SectionH3.css";
import { useTranslation } from "react-i18next";
import TextGrid from "./../Shared/Text/TextGrid"

function SectionH3() {
	const { t } = useTranslation();
	return (
		<div className="SectionH3 row mx-auto"> 
				<TextGrid textCss="SectionH3_text" tr="Home.section_3" btnTxt="Home.section_3.btn"/>
			<div className="SectionH3__right col-sm-12 col-lg-6">

			{t("Home.section_3.items").map((item, index) => {
					return( 
						<div key={index}>
							<div className={`SectionH3__img${index+1} bg`}/>
							<div className={`SectionH3__iconBox${index+1}`}>
								<div className={`SectionH3__icon${index+1} bg`}/>
								<p>{item.info}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	)
}

export default SectionH3;
