import React from 'react';
import { useTranslation } from "react-i18next";
import LayoutGrid from "../Shared/LayoutGrid";
import TextInfo from "../Shared/Text/TextInfo";
import Botton from "../UI/Button/Button";
import { Link } from 'react-router-dom';

function SectionSv3() {
	const { t } = useTranslation();
	return (
		<LayoutGrid section="SectionSv3 bg">
			<div className="col-sm-12 col-lg-6 flex-column">
			<TextInfo txt="Servers.section_3" textAlign="left" color="white" margin="0px" klasa="SectionSv2__txt"/>
			<div><Botton link="/latest-vpn-protocols" offsetBtn={-150} txt="Servers.section_3.btn"
				BGcolor="#8878BF" color="#fff" margin="10px"
				HoverBGcolor="#fff" HoverColor="#8878BF"
				border="1px solid #fff"
				HoverBorder="1px solid #8878BF"/></div>
			</div>
			<div className="col-sm-12 col-lg-6">
				<div className="SectionSv3__BGimg bg">
					<div className="SectionSv3__BGimg--box">
						<div>
							<div>
								<h5>Us1235.coolvpn.com</h5>
								<div className="SectionSv2__iconCountry1"/>
							</div>
							<p>United States#1235</p>
						</div>
						<div>
							<Link to="/">{t("Servers.section_3.btn1a")}</Link>
							<Link to="/">{t("Servers.section_3.btn1b")}</Link>
						</div>
					</div>
				</div>
			</div>
		</LayoutGrid>
	)
}

export default SectionSv3
