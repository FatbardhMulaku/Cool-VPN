import React from 'react';
import TextInfo from "../Shared/Text/TextInfo";
import "./Styles/SectionB2.css";
import PostInfo from "./PostInfo";
import Zoom from 'react-reveal/Zoom';

function SectionB2() {
	return (
		<Zoom>
		<div className="SectionB2 container">
			<div className="SectionB2__img bg my-auto"/>
			<div className="SectionB2__txt">
				<TextInfo txt="Blog.section_2" textAlign="left" color="#2D2E2D" margin="0px" klasa="SectionB2__info"/>

				<PostInfo margin="70px 0 0 0"/>
			</div>
		</div>
		</Zoom>
	)
}

export default SectionB2;
