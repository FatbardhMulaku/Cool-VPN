import React from 'react';
import LayoutGrid from "./../Shared/LayoutGrid";
import TextGrid from "../Shared/Text/TextGridWhite";
import ImageGrid from "../UI/Img/ImgCard";

function SectionFe2() {
	return (
		<div className="Purple__bg">
			<LayoutGrid section="SectionFe2">
				<ImageGrid cardCss="col-sm-12 col-lg-6 ImgC" img="SectionFe2__img bg"/>
				<TextGrid textCss="SectionFe_text" tr="Features.section_2" btnTxt="Features.section_2.btn" linkBtn="SectionFe3"/>
			</LayoutGrid>
		</div>
	)
}

export default SectionFe2
