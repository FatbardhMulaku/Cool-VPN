import React from 'react';
import Slide from 'react-reveal/Slide';
import { FormattedMessage } from "react-intl";
import { serviceCards } from "./data";

function SectionWV6() {
	return (
		<div className="SectionWV6 container">
			<h3><FormattedMessage
					id="WhatIsVPN.section_6.title"
					defaultMessage="When should I use a VPN?"/>
			</h3>
			<Slide bottom cascade>
				<div className="row">
					{serviceCards.map(({ title, desc }, idx) => (
					<div className="SectionWV6--box shadow" key={idx}>
						<div className={`SectionWV6__img${idx+1} bg`}/>
						<div>
							<h4>{title}</h4>
							<p>{desc}</p>
						</div>
					</div>
					))}
				</div>
			</Slide>
		</div>
	)
}

export default SectionWV6;
