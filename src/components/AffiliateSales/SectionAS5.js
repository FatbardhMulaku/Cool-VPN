import React from 'react';
import { FormattedMessage } from "react-intl";
import LayoutContainer from "../Shared/LayoutContainer";
import InputLogin from "../UI/Input/InputLogin";
import Botton from "../UI/Button/ButtonNew";	

function SectionAS5() {
	return (
		<LayoutContainer section="SectionAS5">
			<div className="SectionAS5__box mx-auto">
				<h6>
					<FormattedMessage
						id="AffiliateSales.section_5.title1"
						defaultMessage="Get Started"
					/>
				</h6>
				<InputLogin
					type="text"
					placeholder="Full Name"
					icon=""
				/>
				<InputLogin
					type="email"
					placeholder="Work Email"
					icon=""
				/>
				<InputLogin
					type="text"
					placeholder="Company Name"
					icon=""
				/>
				<div className="row">
					<div className="col-12 col-sm-6">
						<InputLogin
							type="text"
							placeholder="Company URL"
							icon=""
						/>
					</div>
					<div className="col-12 col-sm-6">
						<InputLogin
							type="email"
							placeholder="Country"
							icon=""
						/>
					</div>
				</div>
				<InputLogin
					type="number"
					placeholder="Phone"
					icon=""
				/>

				<label className="container__lab">
					<p><FormattedMessage
							id="AffiliateSales.section_5.desc1"
							defaultMessage="By submitting this form, you agree to ou "
						/>
					<span><FormattedMessage
							id="AffiliateSales.section_5.desc2"
							defaultMessage=" Terms of Service"
						/></span>
						<FormattedMessage
							id="AffiliateSales.section_5.desc3"
							defaultMessage=" and "
						/>
						
						<span>
						<FormattedMessage
							id="AffiliateSales.section_5.desc4"
							defaultMessage="  Privacy Policy "
						/>
						</span>
						<FormattedMessage
							id="AffiliateSales.section_5.desc5"
							defaultMessage="If you do not wish to receive information about CoolVPN services, please send us an email at privacy@easyvpn.com. "
						/>
						</p>
					<input type="checkbox" />
					<span className="checkmark"></span>
				</label>

				<div>
				<Botton link="/become-partner" offsetBtn={-150} txt="AffiliateSales.section_5.btn"
					BGcolor="#8878BF" color="#fff" margin="10px"
					HoverBGcolor="#fff" HoverColor="#000"
					border="1px solid #8878BF"
					HoverBorder="1px solid #000"
					DfBtn="Submit Now"
				/>
				</div>
			</div>
		</LayoutContainer>
	)
}

export default SectionAS5;
