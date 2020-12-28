import React from 'react';
import LayoutGrid from "../Shared/LayoutGrid";
import { useTranslation } from "react-i18next";
import Fade from 'react-reveal/Fade';

function SectionS1() {
	const { t } = useTranslation();
	return (
		<LayoutGrid section="SectionS1" id="sectionS-1">
			<Fade top big>
			<div className="SectionS1_wrapper">
				<h3 className="col_white font-helvetica">{t("Support.section_1.title")} </h3>
				<form className="SectionS1_box justify-content-center">
					<input type="text" placeholder={t("Support.section_1.placeholder")} required />
					<button type="submit"><div className="SectionS1_icon bg"/></button>
				</form>
			</div>
			</Fade>
		</LayoutGrid>
	)
}

export default SectionS1
