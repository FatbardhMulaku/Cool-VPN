import React from 'react';
import LayoutContainer from "../Shared/LayoutContainer";
import { Features } from "./data";
import InfoTxt from "../Shared/Text/TextInfoNew";

function SectionAIP3() {
	return (
		<LayoutContainer section="SectionAIP3">
			<InfoTxt 
				txt="AnonymousIP.section_3" textAlign="center" color="black" margin="0px" klasa="SectionAIP3__txt"
				DfTitle="All VPN Accounts following features" 
				DfDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
			/>
			<div className="row justify-content-center">
				{Features.map(({ title, desc}, idx) => (
					<div className="SectionAIP3__box" key={idx}>
						<div className={`SectionAIP3__box__img${idx+1} bg`}/>
						<h6>{title}</h6>
						<p>{desc}</p>
					</div>
				))}
			</div>
		</LayoutContainer>
	)
}

export default SectionAIP3;
