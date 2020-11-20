import React, { useState } from "react";
import "./Styles/SectionH7.css";
import LayoutGrid from "../Shared/LayoutGrid"
import TextGrid from "../Shared/TextGrid/TextGrid"
import UserFeedbacks from './UserFeedbacks';
import { useTranslation } from "react-i18next";

function SectionH7() {
	const { t } = useTranslation();
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
	  setExpanded(isExpanded ? panel : false);
	};
	return (
		<LayoutGrid section="SectionH7 bg" id="section-h7">
	
			<TextGrid tr="Home.section_7" btnTxt="Home.section_7.btn" textAlign="left" color="black" margin="20px 0"/>
			
			<div className="col-sm-12 col-lg-6 d-flex flex-column">
				{t("Home.section_7.items").map((item, index) => {
					return(
						<UserFeedbacks 
							key={index}
							index={index}
							expanded={expanded}
							handleChange={handleChange}
							icon={`SectionH7__icon${index+1}`}
							name={item.name}
							stars={index+3}
							title={item.title}
							answer={item.answer}
						/>
					)
				})}
			</div>
		</LayoutGrid>
	)
}

export default SectionH7;
