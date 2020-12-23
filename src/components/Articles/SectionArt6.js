import React from 'react';
import LayoutContainer from "../Shared/LayoutContainer";
import { FormattedMessage } from "react-intl";

function SectionArt6() {
	return (
		<LayoutContainer container="SectionArt6">
			<p><FormattedMessage
				id="Product.section_5.link1"
				defaultMessage="32 comments"
			/> &#11206;</p>

			<div>
				<div className="SectionArt6__img1 bg "/>
				<div>
					<p><span><FormattedMessage
						id="Product.section_5.link1"
						defaultMessage="Yuliya Petrova"
					/></span>
					<FormattedMessage
						id="Product.section_5.link1"
						defaultMessage="3:32 pm"
					/>
					</p>
					<p>
					<FormattedMessage
						id="Product.section_5.link1"
						defaultMessage="Play the hits! Some of our favorite editorial features of the last few years with Miguel, Kindness, Toro y Moi, Future Islands, Lee Fields."
					/>
					</p>
				</div>
			</div>

			<div>
				<div className="SectionArt6__img2 bg "/>
				<div>
					<p><span><FormattedMessage
						id="Product.section_5.link1"
						defaultMessage="Artyom Tarasov"
					/></span>
					<FormattedMessage
						id="Product.section_5.link1"
						defaultMessage="3:32 pm"
					/>
					</p>
					<p>
					<FormattedMessage
						id="Product.section_5.link1"
						defaultMessage="I’ve seen people drop hints that they were Bitcoin’s creator seemingly to try to bring in investment money"
					/>
					</p>
				</div>
			</div>
		</LayoutContainer>
	)
}

export default SectionArt6;
