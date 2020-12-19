import React from 'react';
import LayoutContainer from "../Shared/LayoutContainer";
import { FormattedMessage } from "react-intl";
import InfoTxt from "../Shared/Text/TextInfoNew";

function SectionBP4() {
	return (
		<LayoutContainer section="SectionBP4">
			<h3>
				<FormattedMessage
					id="BecomePartner.section_4.title0"
					defaultMessage="What makes us special"
				/>
			</h3>
			<div className="row">
			<div className="SectionBP4__img1 bg"/>
			<div className="col-lg-3"/>
			<div className="col-sm-12 col-lg-9 SectionBP4__box1">
				<InfoTxt 
					txt="AboutUs.section_4" textAlign="left" color="black" margin="0px" klasa="SectionPA2__txt"
					DfTitle="You’re our partner" 
					DfDesc="You will get a dedicated account manager, sales support, and 
					marketing materials. We'll help you with anything you may need 
					along the way."
				/>
				<a href="/what-is-CoolVPN">
					<FormattedMessage
					id="AboutUs.section_4.link1"
					defaultMessage="Read more"
					/>
				</a>
			</div>

			<div className="col-sm-12 col-lg-9 SectionBP4__box2">
				<h3>
					<FormattedMessage
					id="AboutUs.section_4.title2"
					defaultMessage="Easy-to-use platform"
					/>
				</h3>
				<p>
					<FormattedMessage
					id="AboutUs.section_4.desc2"
					defaultMessage="You will use an intuitive reseller dashboard. This will be your place, dedicated to purchasing licenses and managing clients with ease."
					/>
				</p>
				<a href="/what-is-CoolVPN">
					<FormattedMessage
					id="AboutUs.section_4.link2"
					defaultMessage="Read more"
					/>
				</a>
			</div>
			<div className="SectionBP4__img2 bg"/>

			<div className="SectionBP4__img3 bg"><div className="bg"/></div>
			<div className="col-lg-3"/>
			<div className="col-sm-12 col-lg-9 SectionBP4__box3">
				<InfoTxt 
					txt="AboutUs.section_4c" textAlign="left" color="black" margin="0px" klasa="SectionPA2__txt"
					DfTitle="Cast your net wide" 
					DfDesc="CoolVPN is a versatile product. It supports all major platforms (Windows, macOS, iOS, Android, and Linux), and secures up to 6 devices at the same time."
				/>
				<a href="/what-is-CoolVPN">
					<FormattedMessage
					id="AboutUs.section_2.link3"
					defaultMessage="Read more"
					/>
				</a>
			</div>
			</div>
		</LayoutContainer>
	)
}

export default SectionBP4
