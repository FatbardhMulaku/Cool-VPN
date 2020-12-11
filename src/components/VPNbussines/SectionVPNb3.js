import React from 'react';
import { FormattedMessage } from "react-intl";
import TextInfo from "../Shared/Text/TextInfoNew"

function SectionVPNb3() {
	return (
		<div className="SectionVPNb3">
			<div className="container SectionVPNb3__wrapper">
				<h3><FormattedMessage
					id="VPNbussines.section_3.title"
					defaultMessage="Onboard easily with user friendly apps"
				/></h3>
				<div className="row justify-content-center align-items-center">
					<div className="col-sm-11 col-lg-4 my-4 my-lg-0">
						<TextInfo id="VPNbussines.section_3" textAlign="center" color="white" margin="0" klasa="SectionVPNb3__txt"
						DfTitle="Third-party authentication"
						DfDesc="Connect to CoolVPN Teams with your existing business credentials. Our VPN solutions for small business and large corporations offer third-party authentication with Azure AD, GSuite, Okta, and OneLogin."
						/>
					</div>
					<div className="col-sm-11 col-lg-4 my-4 my-lg-0">
						<TextInfo id="VPNbussines.section_3a" textAlign="center" color="white" margin="0" klasa="SectionVPNb3__txt"
						DfTitle="One click to secure any device"
						DfDesc="It takes only one click to encrypt all data traffic on your device. Click on any gateway to connect or enable the auto-connect feature."
						/>
					</div>
					<div className="col-sm-11 col-lg-4">
						<div className="SectionVPNb3__img bg"/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SectionVPNb3;
