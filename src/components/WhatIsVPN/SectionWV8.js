import React from 'react';
import { FormattedMessage } from "react-intl";
import { forCards } from "./data";
import LayoutContainer from "../Shared/LayoutContainer";

function SectionWV8() {
	return (
		<LayoutContainer section="SectionWV8">
			<h3><FormattedMessage
					id="WhatIsVPN.section_8.title"
					defaultMessage="Why CoolVPN?"/>
			</h3>
			<div className="row">
				{forCards.map(({ title, desc }, idx) => (
					<div className="SectionWV8--box shadow" key={idx}>
						<div className={`SectionWV8--box__img${idx+1} bg`}/>
						<div>
							<h5>{title}</h5>
							<p>{desc}</p>
						</div>
					</div>
					))}
			</div>
		</LayoutContainer>
	)
}

export default SectionWV8;
