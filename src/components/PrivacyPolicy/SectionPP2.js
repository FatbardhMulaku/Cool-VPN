import React from 'react';
import LayoutContainer from "../Shared/LayoutContainer";
import { TxtData } from "./data";

function SectionPP2() {
	return (
		<LayoutContainer section="SectionPP2">
			{TxtData.map(({ title, txt1, txt2, txt3 }, idx) => (
				<div className="SectionPP2--box" key={idx}>
						<h5>{title}</h5>
						<p>{txt1}</p>
						<p>{txt2}</p>
						<p>{txt3}</p>
				</div>
			))}
		</LayoutContainer>
	)
}

export default SectionPP2;
