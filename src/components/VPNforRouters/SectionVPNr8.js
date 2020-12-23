import React, { useState } from "react";
import "../Home/Styles/SectionH7.css";
import LayoutContainer from "../Shared/LayoutContainer";
import UserFeedbacks from "../Home/UserFeedbacks";
import { FormattedMessage } from "react-intl";
import { Feedbacks } from "./data";

function SectionVPNr8() {
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
	  setExpanded(isExpanded ? panel : false);
	};
	return (
		<LayoutContainer section="SectionVPNr8">
			<h2><FormattedMessage
				id="VPNforRouters.section_8.title1a"
				defaultMessage="People love ExpressVPN for routers"
			/></h2>
			<div className="mx-auto">
				{Feedbacks.map(({title ,answers }, idx) => (
						<UserFeedbacks 
							key={idx}
							index={idx}
							expanded={expanded}
							handleChange={handleChange}
							icon={`SectionH7__icon${idx+1}`}
							name={title}
							stars={6-idx}
							/* title={title} */
							answer={answers}
						/>
				))}
			</div>
		</LayoutContainer>
	)
}

export default SectionVPNr8;
