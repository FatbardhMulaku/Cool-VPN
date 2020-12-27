import React from 'react';
import Logo from "./../../UI/Logo/Logo"
import { useTranslation } from "react-i18next";
import { FaCopyright , FaMobileAlt} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import MenuListFooter from "./MenuList";
import "./Styles/SectionF2.css";
import { Link } from 'react-router-dom';
/* import LangOptions from "../../UI/LangOptions"; */
import Fade from 'react-reveal/Fade';

function SectionF2() {
	const { t } = useTranslation();
	return (
		<div className="container-fluid footer_content SectionF2">
			<div className="row justify-content-between">
			{t("footerMenu").map((item, index) => (
				<MenuListFooter key={index} title={item.title} list={item.items} />
			))}
			
			<div className="col-sm-12 col-md-6 col-lg-3 footer-logo">
				<Logo logo="white_logo" text="col_white" />
				
				<ul className="footer-list ">
					<li><AiOutlineMail color="white"/>
						<a className="text-lowercase" href="mailto: info@Coolvpn.com"> info@Coolvpn.com</a>
					</li>
					<li><FaMobileAlt color="white"/>
						<a href="tel:+38345400400"> +383 45 400 400</a>
					</li>
					<li>
						<a rel="noopener noreferrer" target="_blank" href="https://goo.gl/maps/gWGFJN2rzNrBZ5FX7" > {t("Footer.location")} </a>
					</li>
				</ul>
			</div>
			</div>

			{/* <div className="footer_socialMedia">
			<h2 className="text-white footer-list-text text-capitalize">
				Follow us
			</h2>
			<SocialMedia />
			</div> */}
			<div className="row mt-5 mt-sm-3">
				<div className="footer-bottom text-white col-sm-12 col-lg-8">
					<h6 className="alRight align-items-center"><i><FaCopyright /></i>{t("alRight")} </h6>
					<div className="footer-terms">
					|<Link to="Privacy"> Privacy Policy </Link> | <Link to="security-vulnerability"> Security Vulnerability</Link> |
					
					</div>
					{/* <LangOptions /> */}
					
				</div>
				<Fade top big cascade> 
				<div className="social__icons col-sm-12 col-lg-4">
				{t("IconSocial").map((item, index) => {
					return (
						<a key={index} target="_blank" rel="noreferrer" href={item.linku}>
							<div className={`social_icon${index+1} bg`}/>
						</a>
					)
				})}
				</div>
				</Fade>
			</div>
		</div>
	)
}

export default SectionF2
