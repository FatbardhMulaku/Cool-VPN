import React from 'react';
import "./Styles/SectionH4.css";
import { useTranslation } from "react-i18next";
import Textinfo from "./../Shared/Text/TextInfo";
import Buttoni from "./../UI/Button/Button";
import ListItem from "../Shared/Text/TextList";

function SectionH4() {
	const { t } = useTranslation();
	return (
		<div className="SectionH4 container">
			<Textinfo txt="Home.section_4" textAlign="center" color="black" margin="20px 0"/>
			<h2>{t("Home.section_4.subtitle")}</h2>

			<div className="row justify-content-center">
			{t("Home.section_4.info").map((item, index) => {
				return(
					<div key={index} className="SectionH4__box">
							<h4>{item.title}</h4>
							<ListItem txt={`Home.section_4.item${index+1}`} icon={`Home.section_4.item1.icon`}/>
							<h2>{item.price}</h2>
							<Buttoni 
								link="SectionH4" offsetBtn={-150} txt={item.btn}
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
		</div>
	)
}

export default SectionH4;
