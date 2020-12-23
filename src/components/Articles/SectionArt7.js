import React from 'react';
import LayoutContainer from "../Shared/LayoutContainer";
import { FormattedMessage } from "react-intl";
import { Article } from "./data";

function SectionArt7() {
	return (
		<LayoutContainer section="SectionArt7">
			<h3>
				<FormattedMessage
					id="Product.section_7.title"
					defaultMessage="You might also like"
				/>
			</h3>
			<div className="row justify-content-center">
				{Article.map(({info, title, desc}, idx) => (
					<div className="SectionArt7__box shadow" key={idx}>
						<div className={`SectionArt7__box__img${idx+1} bg`}/>
						<div>
							<h6>{info}</h6>
							<h3>{title}</h3>
							<p>{desc}</p>
						</div>
					</div>
				))}
			</div>
		</LayoutContainer>
	)
}

export default SectionArt7;
