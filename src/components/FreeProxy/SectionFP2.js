import React from 'react';
import { FormattedMessage } from "react-intl";
import LayoutContainer from "../Shared/LayoutContainer";
import Botton from "../UI/Button/ButtonNew";

function SectionFP2() {

	return (
		<LayoutContainer section="SectionFP2">
			<p>
				<FormattedMessage
					id="FreeProxy.section_2.desc1"
					defaultMessage="Enter Web address"
				/>
			</p>
			<div>
				<input type="text" placeholder="http://youtube.com/wtach/v=tyxbgh890OJYh"></input>
			</div>
			
			<div className="select1">
			<select className="select1--css">
				<option>Country</option>
				<option>USA</option>
				<option>United Kindom</option>
				<option>Germany</option>
				<option>Italy</option>
			</select>

			<select className="select1--css">
				<option>More Option</option>
				<option>Option 1</option>
				<option>Option 2</option>
				<option>Option 3</option>
				<option>Option 4</option>
			</select>
			</div>

			<div>
				<Botton link="/become-partner" offsetBtn={-150} txt="FreeProxy.section_2.btn"
					BGcolor="#8878BF" color="#fff" margin="10px 0 0 0"
					HoverBGcolor="transparent" HoverColor="#000"
					border="1px solid #8878BF"
					HoverBorder="1px solid #000"
					DfBtn="Visit Anonymously"
				/>
			</div>


		</LayoutContainer>
	)
}

export default SectionFP2;
