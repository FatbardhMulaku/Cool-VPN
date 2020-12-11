import React from 'react';
import TextInfo from "../Shared/Text/TextInfo";
import Botton from "../UI/Button/Button"; 
import "./Styles/SectionFe6.css";
import Zoom from 'react-reveal/Zoom';

function SectionFe6() { 
	return (
		<div className="SectionFe6">
			<Zoom>
			<div className="contaFe6__box container">
				<div className="SectionFe6__txt">
					<TextInfo txt="Features.section_6" textAlign="left" color="#2D2E2D" margin="0px" klasa="SectionFe6__txt"/>

					<Botton linkBtn="SectionFe1" offsetBtn={-150} txt="Features.section_6.btn"
							BGcolor="#8878BF" color="#fff" margin="0px"
							HoverBGcolor="transparent" HoverColor="#8878BF"
							border="1px solid #8878BF"
							HoverBorder="1px solid #8878BF"/>
				</div>
				<div className="SectionFe6__img bg mt-sm-2 mx-auto"/>
			</div>
			</Zoom>
		</div>
	)
}

export default SectionFe6;
