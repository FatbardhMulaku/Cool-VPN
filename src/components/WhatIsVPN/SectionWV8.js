import React from 'react';
import { FormattedMessage } from "react-intl";
import { forCards } from "./data";
import LayoutContainer from "../Shared/LayoutContainer";
import Botton from "../UI/Button/ButtonNew";

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
			<div>
			<Botton link="/" offsetBtn={-150} txt="WhatIsVPN.section_8.btn"
						BGcolor="#8878BF" color="#fff" margin="10px"
						HoverBGcolor="#fff" HoverColor="#8878BF"
						border="1px solid #8878BF"
						HoverBorder="1px solid #8878BF"
						DfBtn="Get CoolVPN"
				/>
			</div>
		</LayoutContainer>
	)
}

export default SectionWV8;
