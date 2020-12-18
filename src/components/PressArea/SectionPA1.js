import React from 'react';
import LayoutContainer from "../Shared/LayoutContainer";
import InfoTxt from "../Shared/Text/TextInfoNew"
import Botton from "../UI/Button/ButtonNew";

function SectionPA1() {
	return (
		<LayoutContainer section="SectionPA1 bg">
			<InfoTxt 
				txt="PressArea.section_1" textAlign="left" color="white" margin="0px" klasa="SectionPA1__txt"
				DfTitle="Press area" 
				DfDesc="Visual and content resources for journalists and media outlets"
			/>
			<div>
			<Botton link="/download" offsetBtn={-150} txt="PressArea.section_1.btn"
				BGcolor="#8878BF" color="#fff" margin="15px 0 0 0"
				HoverBGcolor="#fff" HoverColor="#000"
				border="1px solid #8878BF"
				HoverBorder="1px solid #000"
				DfBtn="Download all assets"
			/>
			</div>
		</LayoutContainer>
	)
}

export default SectionPA1;
