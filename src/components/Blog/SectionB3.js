import React from 'react';
import { useTranslation } from "react-i18next";
import PostInfo from "./PostInfo";
import "./Styles/SectionB3.css";

function SectionB3() {
	const { t } = useTranslation();
	return (
		<div className="SectionB3 container">
			<h5>{t("Blog.section_3.title")}</h5>

			<div className="row justify-content-center">
				{t("Blog.section_3.items").map((item, index) => {
					return(
						<div key={index} className="SectionB3__box">
							<div className={`SectionB3__icon${index+1} bg mx-auto`}/>
							<h6>{item.title}</h6>
							<p>{item.desc}</p>
							<PostInfo margin="30px 0 0 0"/>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default SectionB3;
