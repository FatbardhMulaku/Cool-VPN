import React from 'react';
import LayoutGrid from "../Shared/LayoutGrid";
import "./Styles/SectionH1.css"
import Buttoni from "../UI/Button/Button";
import { useTranslation } from "react-i18next";
import SectionTwo from "./SectionH2";
import SectionTree from "./SectionH3";
import Fade from 'react-reveal/Fade';

function SectionH1() {
	const { t } = useTranslation();
	return (
		<LayoutGrid section="sectionH1 bg imgBG" id="section-1">
			 <Fade left cascade>
			<div className="col-sm-12 col-lg-6 my-4 sectionH1__left">
				<h1>{t("Home.section_1.title")}</h1>
				<hr className="SectionH1__hr"/>
				<p>{t("Home.section_1.desc")}</p>

				<div>
					<Buttoni 
						link="SectionH3" offsetBtn={-150}
						txt="Home.section_1.btn1"
						BGcolor="#fff"
						color="#000"
						HoverBGcolor="transparent"
						HoverColor="#fff"
						border="1px solid transparent"
						margin="0 20px 0 0"
						HoverBorder="1px solid #fff"
					/> 
					<Buttoni 
						link="SectionH3" offsetBtn={-150}
						txt="Home.section_1.btn2"
						BGcolor="transparent"
						color="#fff"
						HoverBGcolor="#fff"
						HoverColor="#000"
						border="1px solid #fff"
						margin="0 20px 0 0"
						HoverBorder="1px solid #fff"
					/> 
				</div>
			</div></Fade>
			<Fade>
			<div className="col-sm-12 col-lg-6 sectionH1__right">
				<div className="sectionH1__box1">
					<div  className="sectionH1__right--icon bg"/>
					<div><p>100%</p><p>{t("Home.section_1.info1")}</p></div>
				</div>
				<div className="sectionH1__img1 bg"/>
				<div className="sectionH1__img2 bg"/>
				<div className="sectionH1__box2">
					<div  className="sectionH1__right--icon2 bg"/>
					<div><p>{t("Home.section_1.info2a")}</p><p>{t("Home.section_1.info2b")}</p></div>
				</div>
			</div></Fade>
			<SectionTwo />
			<SectionTree />
		</LayoutGrid>
	)
}

export default SectionH1;
