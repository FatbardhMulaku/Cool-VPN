import React from 'react';
import LayoutGrid from "../Shared/LayoutGrid";
import InfoTxt from "../Shared/Text/TextInfoNew";
import Botton from "../UI/Button/ButtonNew";

function SectionVPNr6() {
	return (
		<LayoutGrid section="SectionVPNr6">
			<div className="col-sm-12 col-lg-5">
				<div className="SectionVPNr6__img bg"/>
			</div>
			<div className="col-sm-12 col-lg-6">
			<InfoTxt 
				txt="VPNforRouters.section_6" textAlign="left" color="black" margin="0px" klasa="SectionVPNr3__txt"
				DfTitle=" Easy-to-use interface" 
				DfDesc="Choosing a VPN server location and getting connected are a 
				breeze. Say goodbye to confusing menus and settings—just 
				click to connect. Want certain devices excluded from the VPN? 
				No problem. Split tunneling gives you complete control."
			/>
			<div>
				<Botton link="/" offsetBtn={-150} txt="VPNforRouters.section_6.btn"
					BGcolor="#8878BF" color="#fff" margin="20px 0 0 0"
					HoverBGcolor="#fff" HoverColor="#000"
					border="1px solid #8878BF"
					HoverBorder="1px solid #000"
					DfBtn="Get CoolVPN"
				/>
			</div>
			</div>
		</LayoutGrid>
	)
}

export default SectionVPNr6;
