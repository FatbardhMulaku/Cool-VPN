import React from 'react';
import "./Style/index.scss";
import TextInfo from "../Shared/Text/TextInfo";
import LayoutContainer from "../Shared/LayoutContainer";
import Botton from "../UI/Button/Button";

function SectionSv1() {
	return (
		<LayoutContainer section="SectionSv1">
			<TextInfo txt="Servers.section_1" textAlign="left" color="white" margin="0px" klasa="SectionSv1__txt"/>
			<div className="row justify-content-start">
					<Botton link="/pricing" offsetBtn={-150} txt="Servers.section_1.btn1"
								BGcolor="#8878BF" color="#fff" margin="10px"
								HoverBGcolor="transparent" HoverColor="#fff"
								border="1px solid #8878BF"
								HoverBorder="1px solid #8878BF"/>
					<Botton linkBtn="/pricing" offsetBtn={-150} txt="Servers.section_1.btn2"
							BGcolor="transparent" color="#fff" margin="10px"
							HoverBGcolor="#8878BF" HoverColor="#fff"
							border="2px solid #8878BF"
							HoverBorder="2px solid #8878BF"/>
				</div>
		</LayoutContainer>
	)
}

export default SectionSv1;
