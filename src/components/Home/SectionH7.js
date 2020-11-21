import React, { useState } from "react";
import "./Styles/SectionH7.css";
import LayoutGrid from "../Shared/LayoutGrid"
/* import TextGrid from "../Shared/Text/TextGrid" */
import UserFeedbacks from './UserFeedbacks';
import { useTranslation } from "react-i18next";
import TextInfo from "../Shared/Text/TextInfo";
import Buttoni from "../UI/Button/Button";

function SectionH7() {
	const { t } = useTranslation();
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
	  setExpanded(isExpanded ? panel : false);
	};
	return (
		<LayoutGrid section="SectionH7 bg" id="section-h7">
			<div className="col-sm-12 col-lg-6 mb-sm-5">
				<h5>User Feedbacks</h5>
				<TextInfo txt="Home.section_7" textAlign="left" color="black" margin="20px" klasa="SectionH7__txt"/>
				<Buttoni 
					link="SectionH4" offsetBtn={-150} txt="Home.section_7.btn"
					BGcolor="#2D2E2D" color="#fff" margin="20px"
					HoverBGcolor="transparent" HoverColor="#2D2E2D"
					border="1px solid black"
					HoverBorder="1px solid #2D2E2D"
				/> 
			</div>
			{/* <TextGrid tr="Home.section_7" btnTxt="Home.section_7.btn" textAlign="left" color="black" margin="20px 0"/> */}
			
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
