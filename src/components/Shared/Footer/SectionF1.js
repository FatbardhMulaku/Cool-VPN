import React from 'react';
import LayoutGrid from "../LayoutGrid";
import { useTranslation } from "react-i18next";
import "./Styles/SectionF1.css";

function SectionF1() {
	const { t } = useTranslation();
	return (
		<LayoutGrid section="SectionF1" row="justify-content-around">
			<div className="subscribe_container">
				<h3 className="col_white font-helvetica">{t("Footer.subscribe.title")} </h3>
				<form className="subscribe justify-content-center">
				<input type="email" placeholder="Enter your email address" required />
				<button type="submit">{t("Footer.subscribe.name")}</button>
				</form>
			</div>
			<div className="download__imgF1">
				<h6>{t("Footer.subscribe.download")}</h6>
				<div className="store_img">
					<div className="store_boxF1">
						<div className="app_store_img bg m-auto"/>
						<div className="store_box-txt">
							<p>{t("Footer.subscribe.appStore")}</p>
							<h6>App Store</h6>
						</div>
					</div>
					<div className="store_boxF1">
						<div className="Google_play_img bg m-auto"/>
						<div className="store_box-txt">
							<p>{t("Footer.subscribe.googlePlay")}</p>
							<h6>Google Play</h6>
						</div>
					</div>
				</div>
			</div>
		</LayoutGrid>
	)
}

export default SectionF1
