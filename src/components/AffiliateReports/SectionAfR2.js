import React from 'react';
import LayoutContainer from "../Shared/LayoutContainer";
import { TxtData } from "./data";
import InfoTxt from "../Shared/Text/TextInfoNew";

function SectionAfR2() {
	return (
		<LayoutContainer section="SectionAfR2">
			{TxtData.map(({ title, txt1, txt2, txt3,txt4}, idx) => (
				<div className="SectionAfR2--box" key={idx}>
						<h5>{title}</h5>
						<p>{txt1}</p>
						<p>{txt2}</p>
						<p>{txt3}</p>
						<p>{txt4}</p>
				</div>
			))}

			<InfoTxt 
				txt="AffiliateReports.section_1" textAlign="left" color="black" margin="40px 0 0 0" klasa="SectionAfR2__txt"
				DfTitle="How to Create a Monthly Sales Report for Your Affiliate Marketing Program" 
				DfDesc="A successful sales report is one that meets your business’ specific needs. With this in mind, below is a three-step method you can follow to create your own report."
			/>

			<InfoTxt 
				txt="AffiliateReports.section_3" textAlign="left" color="black" margin="40px 0 0 0" klasa="SectionAfR2__txt"
				DfTitle="Choose Your Affiliate Metrics to Keep Track of Business Operations" 
				DfDesc="Sales metrics – such as conversion rates and time spent on page – can be helpful when it comes to optimizing your sales process. Your metrics will tell you what percentage of your leads are converting. To ensure that your sales reports maximize their value, it’s important to choose the right affiliate metrics. Here are a few tips to help you do so:"
			/>
		</LayoutContainer>
	)
}

export default SectionAfR2;
