import React from 'react';
import LayoutGrid from "./../Shared/LayoutGrid";
import TextGrid from "../Shared/Text/TextGrid";
import ImageGrid from "../UI/Img/ImgCard";

function SectionFe5() {
	return (
		<LayoutGrid section="SectionFe5">
			<TextGrid textCss="SectionFe5_text" tr="Features.section_5" btnTxt="Features.section_5.btn" linkBtn="SectionFe6"/>
			<ImageGrid cardCss="col-sm-12 col-lg-6 ImgC" img="SectionFe5__img bg"/>
		</LayoutGrid>
	)
}

export default SectionFe5
