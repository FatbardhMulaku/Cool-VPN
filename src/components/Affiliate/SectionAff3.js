import React from 'react'
import InfoTxt from "../Shared/Text/TextInfoNew";
import LayoutContainer from "../Shared/LayoutContainer";
import { Sec3ThreeCards } from "./data";

function SectionAff3() {
	return (
		<LayoutContainer section="SectionAff3">
			<InfoTxt 
				txt="Affiliate.section_3" textAlign="center" color="white" margin="0px" klasa="SectionAff3__txt"
				DfTitle="Working with us is simple" 
				DfDesc="Make money in 3 easy steps."
			/>
			
			<div className="row justify-content-center">
				{Sec3ThreeCards.map(({ title, desc }, idx) => (
					<div className="SectionAff3--box shadow-sm" key={idx}>
						<div>
							<h5>{title}</h5>
							<p>{desc}</p>
						</div>
						<div className={`SectionAff3--box__img${idx+1} bg`}/>
					</div>
					))}
			</div>
		</LayoutContainer>
	)
}

export default SectionAff3;
