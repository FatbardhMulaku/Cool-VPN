import React from 'react'
import { FormattedMessage } from "react-intl";
import LayoutContainer from "../Shared/LayoutContainer";

function SectionPA7() {
	return (
		<LayoutContainer section="SectionPA7 bg">
			<h3>
				<FormattedMessage
					id="PressArea.section_7.title"
					defaultMessage="Media contacts"/>
			</h3>
			<p>
				<FormattedMessage
					id="PressArea.section_7.desc1"
					defaultMessage="For media inquiries, please email us at "/>
				<a href="mailto: press@coolvpnpr.com">
				<FormattedMessage
					id="PressArea.section_7.email"
					defaultMessage=" press@coolvpnpr.com"/>
				</a>
			</p>
			<p>
				<FormattedMessage
					id="PressArea.section_7.desc2"
					defaultMessage="You can also reach us on Twitter or Facebook."/>
			</p>
		</LayoutContainer>
	)
}

export default SectionPA7
