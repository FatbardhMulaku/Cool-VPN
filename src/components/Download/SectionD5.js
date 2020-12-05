import React from 'react';
import TextInfo from "../Shared/Text/TextInfo";
import Botton from "../UI/Button/Button"; 
import "./Style/index.scss";

function SectionD5() {
	return (
		<div className="SectionD5">
			<div className="SectionD5__box container">
				<div className="SectionFe6__txt">
					<TextInfo txt="Download.section_4" textAlign="left" color="#2D2E2D" margin="0px" klasa="SectionFe6__txt"/>

					<Botton linkBtn="SectionFe1" offsetBtn={-150} txt="Download.section_4.btn"
							BGcolor="#8878BF" color="#fff" margin="0px"
							HoverBGcolor="transparent" HoverColor="#8878BF"
							border="1px solid #8878BF"
							HoverBorder="1px solid #8878BF"/>
				</div>
				<div className="SectionD5__img bg mt-sm-2 mx-auto"/>
			</div>
		</div>
	)
}

export default SectionD5
