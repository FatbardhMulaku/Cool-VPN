import React from 'react';
import "./Styles/SectionH6.css";
import LayoutContainer from "../Shared/LayoutContainer";
import Textinfo from "../Shared/Text/TextInfo";
import ListItem from "../Shared/Text/TextList";
import { useTranslation } from "react-i18next";

function SectionH6() { 
	const { t } = useTranslation();
	return (
		<LayoutContainer section="SectionH6">
			<Textinfo txt="Home.section_6" textAlign="center" color="black" margin="20px 0"/>

			<div className="row justify-content-center">
				{t("Home.section_6.info").map((item, index) => {
					return(
						<div key={index+1} className="SectionH6__box">
							<p className={`subH6${index+1}`}>{item.subtitle}</p>
							<div className="SectionH6__line mb-4">
								<div className={`SectionH4__icon--title${index+1} bg`}/>
								<h4>{item.title}</h4>
							</div>
							<ListItem txt={`Home.section_6.items${index+1}`} icon={`SectionH6__icon${index+1}`}/>
						</div>
					);
				})}
			</div>
		</LayoutContainer>
	)
}
export default SectionH6;