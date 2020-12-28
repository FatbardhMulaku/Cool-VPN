import React from 'react';
import { useTranslation } from "react-i18next";
import LayoutGrid from "../Shared/LayoutGrid";
import ImgCard from "../UI/Img/ImgCard";
import Bounce from 'react-reveal/Bounce';

function SectionD2() {
	const { t } = useTranslation();
	return (
		<LayoutGrid section="SectionD2">
			<ImgCard cardCss="SectionD2__left col-sm-12 col-lg-6" img="SectionD2__left--img bg"/>
			<div className="SectionD2__right col-sm-12 col-lg-6">
				<h3>{t("Download.section_2.title")}</h3>
				<Bounce right cascade>
				<div className="col">
					{t("Download.section_2.items").map((item, index) => {
						return (
							<div key={index} className="SectionD2__right--box">
								<div className={`SectionD2__right--box__img${index+1} bg`}/>
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
		</LayoutGrid>
	)
}

export default SectionD2;
