import React from 'react';
import LayoutContainer from "../Shared/LayoutContainer";
import InfoTxt from "../Shared/Text/TextInfoNew";
import Botton from "../UI/Button/ButtonNew";

function SectionAU1() {
	return (
		<LayoutContainer section="SectionAU1 bg">
			<InfoTxt 
				txt="AboutUs.section_1" textAlign="left" color="white" margin="0px" klasa="SectionAU1__txt"
				DfTitle="About CoolVPN" 
				DfDesc="No logs, no hidden fees. All plans come with the 30-day money-back guarantee. Discover Cool VPN Teams for business."
			/>
			<div className="row justify-content-center my-4">
				<Botton link="/SignUp" offsetBtn={-150} txt="AboutUs.section_1.btn1"
					BGcolor="#fff" color="#000" margin="20px 10px"
					HoverBGcolor="transparent" HoverColor="#fff"
					border="1px solid #000"
					HoverBorder="1px solid #fff"
					DfBtn="Open a new account"
				/>
				<Botton link="/what-is-CoolVPN" offsetBtn={-150} txt="AboutUs.section_1.btn2"
				BGcolor="transparent" color="#fff" margin="20px 10px"
				HoverBGcolor="#fff" HoverColor="#000"
				border="1px solid #fff"
				HoverBorder="1px solid #000"
				DfBtn="See how it works"
			/>
			</div>
		</LayoutContainer>
	)
}

export default SectionAU1;
