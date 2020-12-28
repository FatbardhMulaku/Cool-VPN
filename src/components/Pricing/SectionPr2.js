import React from 'react';
import TextInfo from "../Shared/Text/TextInfo";
import Zoom from 'react-reveal/Zoom';

function SectionPr2() {
	const boxes = [1,2,3];
	return (
		<div className="SectionPr2 container">
			<TextInfo txt="Pricing.section_2" textAlign="left" color="black" margin="0px" klasa="SectionPr1__info"/>

			<Zoom cascade>
			<div className="row justify-content-center mt-5">
				{boxes.map((item, index) => {
					return(
						<div key={index} className={`SectionPr2__img${index+1} bg`}>
							<div className={`SectionPr2__icon${index+1} bg`}/>
							<TextInfo txt={`Pricing.section_2.items${[index+1]}`} textAlign="left" color="white" margin="0px" klasa="SectionPr2__info"/>
						</div>
					)
				})}

			</div>
			</Zoom>
		</div>
	)
}

export default SectionPr2;
