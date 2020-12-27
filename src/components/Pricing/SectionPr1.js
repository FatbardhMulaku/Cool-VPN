import React from 'react';
import "./Styles/index.scss"
import "../Home/Styles/SectionH4.css";
import TextInfo from "../Shared/Text/TextInfo";
import ButtonIcon from "../UI/Button/ButtonIcon";
import Buttoni from "./../UI/Button/Button";
import ListItem from "../Shared/Text/TextList";
import { useTranslation } from "react-i18next";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

function SectionPr1() {
	const { t } = useTranslation();
	return (
		<div className="SectionPr1 bg">
			<div className="container">
				<Fade left>
				<TextInfo txt="Pricing.section_1" textAlign="left" color="white" margin="0px" klasa="SectionPr1__info"/></Fade>
				<Fade top big> 
				<div className="row mt-4 mb-4">
				<ButtonIcon linkBtn="SectionPr2" icon="SectionPr1__img1 bg" offsetBtn={-150} txt="Pricing.section_1.btn1"
							BGcolor="#8878BF" color="#fff" margin="10px"
							HoverBGcolor="#8878BF" HoverColor="white"
							border="1px solid #8878BF"
							HoverBorder="1px solid white"/>

				<ButtonIcon link="/checkout" icon="SectionPr1__img2 bg" offsetBtn={-150} txt="Pricing.section_1.btn2"
							BGcolor="rgba(199, 199, 199, 0.5)" color="#fff" margin="10px"
							HoverBGcolor="rgba(199, 199, 199, 0.5)" HoverColor="white"
							border="1px solid transparent"
							HoverBorder="1px solid white"/>

				<ButtonIcon link="/checkout" icon="SectionPr1__img3 bg" offsetBtn={-150} txt="Pricing.section_1.btn3"
							BGcolor="rgba(199, 199, 199, 0.5)" color="#fff" margin="10px"
							HoverBGcolor="rgba(199, 199, 199, 0.5)" HoverColor="white"
							border="1px solid transparent"
							HoverBorder="1px solid white"/>
				</div></Fade>
				<Zoom cascade> 
				<div className="row justify-content-center">
					{t("Home.section_4.info").map((item, index) => {
						return(
							<div key={index} className="SectionH4__box">
									<h4>{item.title}</h4>
									<ListItem txt={`Home.section_4.item${index+1}`} icon={`Home.section_4.item1.icon`}/>
									<h2>{item.price}</h2>
									<Buttoni 
										link="/checkout" offsetBtn={-150} txt={item.btn}
										BGcolor="#2D2E2D" color="#fff"
										HoverBGcolor="transparent" HoverColor="#2D2E2D"
										border="1px solid black"
										HoverBorder="1px solid #2D2E2D"
									/> 
									<p>{item.save}</p>
							</div>
						);
					})}
				</div>
				</Zoom>
				<Zoom > <div className="SectionPr1__img bg"/></Zoom>
			</div>
		</div>
	)
}

export default SectionPr1
