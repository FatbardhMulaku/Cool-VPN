import React from 'react';
import { useTranslation } from "react-i18next";
import LayoutGrid from "../Shared/LayoutGrid";
import ImgCard from "../UI/Img/ImgCard";
import Bounce from 'react-reveal/Bounce';

function SectionD3() {
	const { t } = useTranslation();
	return (
		<LayoutGrid section="SectionD2">
			<div className="SectionD2__right col-sm-12 col-lg-6">
				<h3>{t("Download.section_2.title")}</h3>
				<Bounce left cascade> 
				<div className="col">
					{t("Download.section_2.items").map((item, index) => {
						return (
							<div key={index} className="SectionD2__right--box">
								<div className={`SectionD3__right--box__img${index+1} bg`}/>
								<div>
									<h6>{item.title}</h6>
									<p>{item.desc}</p>
								</div>
							</div>
						)
					})}
				</div>
				</Bounce>
			</div>
			<ImgCard cardCss="SectionD3__left col-sm-12 col-lg-6" img="SectionD3__left--img bg"/>
		</LayoutGrid>
	)
}

export default SectionD3;