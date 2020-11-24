import React from 'react';
import TextInfo from "../Shared/Text/TextInfo";
import "./Styles/SectionB2.css";

function SectionB2() {
	return (
		<div className="SectionB2 container">
			<div className="SectionB2__img bg my-auto"/>
			<div className="SectionB2__txt">
				<TextInfo txt="Blog.section_2" textAlign="left" color="#2D2E2D" margin="0px" klasa="SectionB2__info"/>
				<div className="SectionB2__time">
					<div className="SectionB2__icon bg my-auto"/>
					<div>
						<p>Isabella Smith</p>
						<p>Aug 07, 2020 </p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SectionB2
