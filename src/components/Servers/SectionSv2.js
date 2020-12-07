import React from 'react';
import "./Style/index.scss";
import TextInfo from "../Shared/Text/TextInfo";
import BoxServer from "./ServerBox";
import Botton from "../UI/Button/Button";

function SectionSv2() {
	return (
		<div className="SectionSv2 container">
			<TextInfo txt="Servers.section_2" textAlign="center" color="black" margin="30px 0 0 0" klasa="SectionSv2__txt"/>
			
			<BoxServer 
			  titulli="title1"
			  textAlign="left"
			  box="SectionSv2__box"
			  box2="SectionSv2__box1"
			  BoxBgGcolor="#8878BF"
			  BoxColor="#fff"
			  arrowIcon="SectionSv2__leftIconWhite"
			  listIcon="SectionSv2__iconWhite"
			/>

			<BoxServer 
			  titulli="title2"
			  textAlign="Right"
			  box="SectionSv2__box"
			  box1="SectionSv2__box1"
			  BoxColor="#000"
			  BoxBorder="2px solid #919191"
			  arrowIcon="SectionSv2__leftIconBlack"
			  listIcon="SectionSv2__iconBlack"
			/>

			<BoxServer 
			  titulli="title3"
			  textAlign="left"
			  box="SectionSv2__box"
			  box2="SectionSv2__box1"
			  BoxBgGcolor="#8878BF"
			  BoxColor="#fff"
			  arrowIcon="SectionSv2__leftIconWhite"
			  listIcon="SectionSv2__iconWhite"
			/>

			<BoxServer 
			  titulli="title4"
			  textAlign="Right"
			  box="SectionSv2__box"
			  box1="SectionSv2__box1"
			  BoxColor="#000"
			  BoxBorder="2px solid #919191"
			  arrowIcon="SectionSv2__leftIconBlack"
			  listIcon="SectionSv2__iconBlack"
			/>
			<div><Botton linkBtn="SectionSv2" offsetBtn={-150} txt="Servers.section_2.btn"
				BGcolor="#8878BF" color="#fff" margin="10px"
				HoverBGcolor="#fff" HoverColor="#8878BF"
				border="1px solid #8878BF"
				HoverBorder="1px solid #8878BF"/></div>
			
		</div>
	)
}

export default SectionSv2;
       