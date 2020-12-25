import React from 'react';
import LayoutContainer from "../Shared/LayoutContainer";
import { ImgCards } from "./data";
import InfoTxt from "../Shared/Text/TextInfoNew";
import { FormattedMessage } from "react-intl";	

function SectionRH4() {
	return (
		<LayoutContainer section="SectionRH4">
			<InfoTxt 
				txt="AffiliateSales.section_2" textAlign="center" color="black" margin="0px" klasa="SectionAS2__txt"
				DfTitle="Best Solution with the Most Innovative" 
				DfDesc="We offer the best commission rates in the industry."
			/>

			<div className="row justify-content-center">
				{ImgCards.map(({ title}, idx) => (
					<div className="SectionRH4__box" key={idx}>
						<div className={`SectionRH4__box__img${idx+1} bg`}/>
						<h5>{title}</h5>
					</div>
				))}
			</div>
			
			<InfoTxt 
				txt="AffiliateSales.section_2b" textAlign="center" color="black" margin="20px 0 0 0" klasa="SectionAS2__txt"
				DfTitle="The reviews are in" 
				DfDesc="Find out what YouTube content creators have to say about CoolVPN."
			/>

			<div className="SectionRH4__foo mx-auto">
				<div>
					<h3>
						<FormattedMessage
							id="ResellerHistory.section_4bb.title1"
							defaultMessage="Great experience using @Coolvpn. Amazing customer service and an even faster solution response rate. "
						/>
					</h3>
					<h5>
					<FormattedMessage
							id="ResellerHistory.section_4bb.desc"
							defaultMessage="Christian Warner"
						/>
					</h5>
					<div className="SectionRH4__foo__img2 bg"/>
					<p>
					<FormattedMessage
							id="ResellerHistory.section_4bb.desc22"
							defaultMessage="Developer@ueno.co"
						/>
					</p>
				</div>
				<div>
					<div className="SectionRH4__foo__img bg" />
				</div>
			</div>
		</LayoutContainer>
	)
}

export default SectionRH4;
