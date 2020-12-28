import React from 'react';
import LayoutGrid from "./../Shared/LayoutGrid";
import TextGrid from "../Shared/Text/TextGridWhite";
import ImageGrid from "../UI/Img/ImgCard";

function SectionFe4() {
	return (
		<div className="Purple__bg">
			<LayoutGrid section="SectionFe4">
				<ImageGrid cardCss="col-sm-12 col-lg-6 ImgC" img="SectionFe4__img bg"/>
				<TextGrid textCss="SectionFe_text" tr="Features.section_4" btnTxt="Features.section_4.btn" linkBtn="SectionFe5"/>
			</LayoutGrid>
		</div>
	)
}

export default SectionFe4
