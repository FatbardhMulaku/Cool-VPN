import React from 'react';
import { useTranslation } from "react-i18next";
import LayoutGrid from "../Shared/LayoutGrid";
import Button from "../UI/Button/Button";
import Fade from 'react-reveal/Fade';

function SectionS2() {
	const { t } = useTranslation();
	return (
		<LayoutGrid section="SectionS2">
			<Fade bottom>
			{t("Support.section_2").map((item, index) => {
				return(
					<div key={index} className="SectionS2__box">
						<div className={`SectionS2__img${index+1} bg`}/>

						<Button linkBtn="SectionS3" offsetBtn={-100} txt={item.title}
							BGcolor="#fff" color="#8878BF" margin="0px"
							HoverBGcolor="#8878BF" HoverColor="#fff"
							border="1px solid #8878BF"
							HoverBorder="1px solid #8878BF"/>
					</div>
				)
			})}
			</Fade>
		</LayoutGrid>
	)
}

export default SectionS2
