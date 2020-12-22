import React from 'react';
import { FormattedMessage } from "react-intl";
import LayoutContainer from "../Shared/LayoutContainer";
import { List2 } from "./data";

function SectionVPNr2() {
	return (
		<LayoutContainer section="SectionVPNr2">
			<div className="SectionVPNr2__img1 bg mx-auto"/> 
			<h3><FormattedMessage
				id="VPNforRouters.section_2.title"
				defaultMessage="Why set up a home VPN router?"
			/></h3>

			<div className="row justify-content-around">
				<div className="col-sm-12 col-lg-3 SectionVPNr2__l">
					<div className="SectionVPNr2__img2 bg"/>
				</div>
				<div className="col-sm-12 col-lg-6 SectionVPNr2__r">
					<p><FormattedMessage
						id="VPNforRouters.section_2.title2a"
						defaultMessage="Protect your entire Wi-Fi network easily"
					/></p>
					{List2.map(({ txt }, idx) => (
						<div key={idx} className="SectionVPNr2__line">
							<div className="SectionVPNr2__line--img bg"/>
							<p>{txt}</p>
						</div>
					))}
				</div>
			</div>
		</LayoutContainer>
	)
}

export default SectionVPNr2;
