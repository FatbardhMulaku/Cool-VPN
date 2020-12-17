import React from 'react';
import LayoutContainer from "../Shared/LayoutContainer";
import Fade from 'react-reveal/Fade';
import { FormattedMessage } from "react-intl";
import "../Support/Styles/SectionS1.css"

function SectionFAQ1() {
	return (
		<LayoutContainer section="SectionFAQ1 bg">
			<Fade top big>
			<div className="SectionS1_wrapper">
				<h3 className="col_white font-helvetica">
					<FormattedMessage
						id="FAQ.section_1.title"
						defaultMessage="Have a Question?
						Look here"/>
				</h3>
				<form className="SectionS1_box justify-content-center">
					<input type="text" placeholder="Type your question here.." required />
					<button type="submit"><div className="SectionS1_icon bg"/></button>
				</form>
			</div>
			</Fade>
		</LayoutContainer>
	)
}

export default SectionFAQ1;
