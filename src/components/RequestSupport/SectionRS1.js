import React from 'react';
import LayoutGrid from "../Shared/LayoutGrid";
import InfoTxt from "../Shared/Text/TextInfoNew";

function SectionRS1() {
	return (
		<LayoutGrid section="SectionRS1 bg">
			<InfoTxt 
				txt="RequestSupport.section_1" textAlign="left" color="white" margin="0px" klasa="SectionAIP1__txt col-sm-12 col-lg-5"
				DfTitle="Headquarter" 
				DfDesc="We don’t leave you in mid air 24/7 support via live chat, Tickets, FAQs, Emails & our Community."
			/>
		</LayoutGrid>
	)
}

export default SectionRS1;
