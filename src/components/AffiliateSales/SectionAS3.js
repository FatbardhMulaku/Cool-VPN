import React from 'react';
import LayoutContainer from "../Shared/LayoutContainer";
import { ImgCards } from "./data";
import InfoTxt from "../Shared/Text/TextInfoNew";

function SectionAS3() {
	return (
		<LayoutContainer section="SectionAS3">
			<InfoTxt 
				txt="AffiliateSales.section_3" textAlign="center" color="white" margin="0px" klasa="SectionAS3__txt"
				DfTitle="Who can join our VPN CPA Program & VPN Affiliates Network?" 
				DfDesc="Join now and earn money by promoting one of the best VPN services."
			/>

			<div className="row justify-content-center">
				{ImgCards.map(({ title}, idx) => (
					<div className="SectionAS3__box" key={idx}>
						<div className={`SectionAS3__box__img${idx+1} bg`}/>
						<h6>{title}</h6>
					</div>
				))}
			</div>
		</LayoutContainer>
	)
}

export default SectionAS3
