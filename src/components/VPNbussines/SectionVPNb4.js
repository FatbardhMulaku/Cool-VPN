import React from 'react';
import { FormattedMessage } from "react-intl";

function SectionVPNb4() {
	return (
		<div className="SectionVPNb4 container">
			<h4><FormattedMessage
					id="VPNbussines.section_4.title"
					defaultMessage="Get priority support any time from our website"
				/>
			</h4>
			<div className="row justify-content-center">
				<div className="col-sm-11 col-lg-5 my-4 my-lg-0">
					<div className="SectionVPNb4__img bg">

					</div>
				</div>
				<div className="col-sm-11 col-lg-5 p-3 p-lg-5">
					<p><FormattedMessage
						id="VPNbussines.section_4.desc"
						defaultMessage="You won’t ever have to go at it alone — our professional dedicated support team will be there every step of the way to answer all inquiries you might have. Contact us through any communication channel and we will assist you in up to 3 hours."
					/>
					</p>
				</div>
				</div>
				
		</div>
	)
}

export default SectionVPNb4
