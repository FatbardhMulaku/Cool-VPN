import React from 'react';
import LayoutGrid from "../Shared/LayoutGrid";
import { FormattedMessage } from "react-intl";

function SectionArt4() {
	return (
		<LayoutGrid section="SectionArt4 bg" row="justify-content-center">
			<div className="col-sm-12 col-lg-4 my-3">
				<h3>
				<FormattedMessage
					id="Product.section_4.desc1"
					defaultMessage="Bitcoin wallet service Coinbase will launch the US’ first Bitcoin exchange later today"
				/>
				</h3>
			</div>
			<div className="col-sm-12 col-lg-6 my-3">
				<p>
					<FormattedMessage
						id="Product.section_4.desc2"
						defaultMessage="Although Coinbase’s exchange will initially do business only in the US, CEO Brian Armstrong said that he plans to expand the exchange to serve markets overseas in the future. Bitcoin is currently valued at about $280, up from $230 only three days ago. The cryptocurrency’s value is about $3.2 billion in total, with over 80,000 merchants accepting it for payments, according to currency tracker Coindesk. "
					/>
				</p>
			</div>
			<div className="col-sm-12 col-lg-10 my-3 text-center">
				<p>
					<FormattedMessage
						id="Product.section_4.desc3"
						defaultMessage="The value of Bitcoin has passed the symbolic $500 mark for the first time in a month, suggesting that the cryptocurrency is stabilizing after a rollercoaster six months."
					/>
				</p>
			</div>
		</LayoutGrid>
	)
}

export default SectionArt4;
