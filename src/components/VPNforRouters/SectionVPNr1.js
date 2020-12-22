import React from 'react';
import { FormattedMessage } from "react-intl";
import LayoutGrid from "../Shared/LayoutGrid";
import InfoTxt from "../Shared/Text/TextInfoNew";
import Botton from "../UI/Button/ButtonNew";
import { List } from "./data";

function SectionVPNr1() {
	return (
		<LayoutGrid section="SectionVPNr1"> 
		  <div className="col-sm-12 col-lg-7">
			<InfoTxt 
				txt="VPNforRouters.section_1" textAlign="left" color="white" margin="0px" klasa="SectionAff1__txt"
				DfTitle="VPN for home router" 
				DfDesc="Get CoolVPN on your router and secure every device on your network"
			/>
			<h6><FormattedMessage
				id="VPNforRouters.section_1.title1z"
				defaultMessage="With the CoolVPN app for routers, you can…"
			/></h6>
			<div>
				{List.map(({ txt }, idx) => (
					<div key={idx} className="SectionAff1__line">
						<div className="SectionAff1__line--img bg"/>
						<p>{txt}</p>
					</div>
				))}
			</div>
			<div className="row my-2">
				<Botton link="/become-reseller" offsetBtn={-150} txt="VPNforRouters.section_1.btn1"
					BGcolor="#fff" color="#000" margin="10px"
					HoverBGcolor="transparent" HoverColor="#fff"
					border="1px solid #000"
					HoverBorder="1px solid #fff"
					DfBtn="Get CoolVPN"
				/>
				<Botton link="/Login" offsetBtn={-150} txt="VPNforRouters.section_1.btn2"
					BGcolor="transparent" color="#fff" margin="10px"
					HoverBGcolor="#fff" HoverColor="#000"
					border="1px solid #fff"
					HoverBorder="1px solid #000"
					DfBtn="Get CoolVPN"
				/>
			</div>
		  </div>
		  <div className="col-sm-12 col-lg-5">
			  <div className="SectionVPNr1__img bg"></div>
		  </div>
		</LayoutGrid>
	)
}

export default SectionVPNr1;
