import React from 'react';
import { FormattedMessage } from "react-intl";
import Botton from "../UI/Button/ButtonNew";

function SectionVPNb5() {
	return (
		<div className="SectionVPNb5 container">
			<h4><FormattedMessage
					id="VPNbussines.section_5.title"
					defaultMessage="Start securing your business today"
				/>
			</h4>
			<div className="row justify-content-center">
				<Botton linkBtn="SectionVPNb3" offsetBtn={-150} txt="VPNbussines.section_5.btn1"
					BGcolor="#8878BF" color="#fff" margin="10px"
					HoverBGcolor="#fff" HoverColor="#8878BF"
					border="1px solid #8878BF"
					HoverBorder="1px solid #8878BF"
					DfBtn="Start Now"
				/>
				<Botton linkBtn="SectionVPNb3" offsetBtn={-150} txt="VPNbussines.section_5.btn2"
					BGcolor="#fff" color="#000" margin="10px"
					HoverBGcolor="#000" HoverColor="#fff"
					border="1px solid #000"
					HoverBorder="1px solid #000"
					DfBtn="Request free consultation"
				/>
			</div>
		</div>
	)
}

export default SectionVPNb5;
