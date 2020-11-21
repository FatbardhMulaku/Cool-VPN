import React from 'react';
import Textinfo from "./../Shared/Text/TextInfo";
import Butoni from "./../UI/Button/Button"
import "./Styles/SectionH5.css";

function SectionH5() { 
	return (
		<div className="SectionH5 ">
			<div className="SectionH5_wrapper container">
				<div>
					<Textinfo txt="Home.section_5" textAlign="left" color="white" margin="20px 0"/>
					
					<Butoni link="SectionH6" offsetBtn={-50} txt="Home.section_5.btn" 
						BGcolor="#2D2E2D" color="#fff" margin="20px 0"
						HoverBGcolor="white" HoverColor="black"
						border="1px solid white"  HoverBorder="1px solid white"
					/> 
				</div>
				<div className="SectionH5__img bg m-auto"/>
			</div>
		</div>
	)
}

export default SectionH5;