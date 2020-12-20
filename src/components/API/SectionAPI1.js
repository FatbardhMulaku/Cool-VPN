import React from 'react';
import InfoTxt from "../Shared/Text/TextInfoNew";
import LayoutGrid from "../Shared/LayoutGrid";

function SectionAPI1() {
	return (
		<LayoutGrid section="SectionFP1">
			<InfoTxt 
				txt="Api.section_1" textAlign="left" color="white" margin="0px" klasa="FreeProxy__txt col-sm-12 col-lg-6"
				DfTitle="API for Developer" 
				DfDesc="30 day money back guarantee. Cancel online anytime."
			/>
		</LayoutGrid>
	)
}

export default SectionAPI1;
