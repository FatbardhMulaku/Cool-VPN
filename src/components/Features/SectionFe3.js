import React from 'react';
import LayoutGrid from "./../Shared/LayoutGrid";
import TextGrid from "../Shared/Text/TextGrid";
import ImageGrid from "../UI/Img/ImgCard";
import "./Styles/SectionFe3.css";

function SectionFe3() {
	return (
		<LayoutGrid section="SectionFe3">
			<TextGrid textCss="SectionFe_text" tr="Features.section_3" btnTxt="Features.section_3.btn" linkBtn="SectionFe4"/>
			<ImageGrid cardCss="col-sm-12 col-lg-6 ImgC" img="SectionFe3__img bg"/>
		</LayoutGrid>
	)
}

export default SectionFe3
