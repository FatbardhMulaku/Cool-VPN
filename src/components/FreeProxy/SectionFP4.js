import React from 'react';
import LayoutContainer from "../Shared/LayoutContainer";
import InfoTxt from "../Shared/Text/TextInfoNew";
import {ServerCards} from "./data"

function SectionFP4() {
	return (
		<LayoutContainer section="SectionFP4">
			<InfoTxt 
				txt="FreeProxy.section_4" textAlign="center" color="black" margin="0px" klasa="SectionFP4__txt"
				DfTitle="Improve your online experience with CoolVPN" 
				DfDesc="Encrypt your Internet traffic to browse securely and privately."
			/>

			<div className="row justify-content-center">
				{ServerCards.map(({ title, desc }, idx) => (
					<div className="SectionFP4__box " key={idx}>
						<div className={`SectionFP4__box__img${idx+1} bg mx-auto`}/>
						<div>
							<h5>{title}</h5>
							<p>{desc}</p>
						</div>
					</div>
					))}
			</div>
		</LayoutContainer>
	)
}

export default SectionFP4
