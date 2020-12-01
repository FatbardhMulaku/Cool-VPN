import React from 'react';
import { useTranslation } from "react-i18next";
import PostInfo from "./PostInfo";
import TextInfo from "../Shared/Text/TextInfo";
import "./Styles/SectionB4.css";

const Post = [0, 1, 2, 3]

function SectionB4() {
	const { t } = useTranslation();
	return (
		<div className="SectionB4 container">
			<h5>{t("Blog.section_4.title")}</h5>

			{Post.map((index) =>{
				return(
					<div key={index} className="SectionB4__wrapper container">
						<div className={`SectionB4__img${index+1} bg my-auto`}/>
						<div className="SectionB2__txt">
							<TextInfo txt={`Blog.section_4.item${index+1}`} textAlign="left" color="#2D2E2D" margin="0px" klasa="SectionB4__info"/>
							<PostInfo margin="20px 0 0 0"/>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default SectionB4
