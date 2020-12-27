import React from 'react';
import LayoutContainer from "../Shared/LayoutContainer";
import Botton from "../UI/Button/ButtonNew";
import { FormattedMessage } from "react-intl";
import InputLogin from "../UI/Input/InputLogin";

function index() {
	return (
		<LayoutContainer section="Payment">
			<div className="row">
				<Botton link="/checkout/#" offsetBtn={-150} txt="Payment.section_1.btn2"
					BGcolor="#fff" color="rgb(138, 138, 138)" margin="10px"
					HoverBGcolor="transparent" HoverColor="#8878BF"
					border="2px solid rgb(138, 138, 138)"
					HoverBorder="2px solid #8878BF"
					DfBtn="1. Choose Plan"
				/>
				<Botton link="/checkout/#" offsetBtn={-150} txt="Payment.section_1.btn1"
					BGcolor="#fff" color="#000" margin="10px"
					HoverBGcolor="transparent" HoverColor="#8878BF"
					border="2px solid #000"
					HoverBorder="2px solid #8878BF"
					DfBtn="2. Payment"
				/>
				
			</div>
			<h4>
				<FormattedMessage
					id="Payment.section_2.subtitle1ee"
					defaultMessage="Select a payment method"
				/>
			</h4>

			<div className="Payment__wrapper">
				<div className="Payment__wrapper__card">
					<a href="/payment/#" className="Payment__wrapper__card-a">
						<div className="Payment__wrapper__card-a_rreth"/>
						<div>
							<h6><FormattedMessage
									id="Payment.section_2.info1"
									defaultMessage="Credit Cards"
								/>
							</h6>
							<div className="Payment__wrapper__card-a_img1 bg"/>
						</div>
					</a>
					<a href="/payment/#" className="Payment__wrapper__card-a">
						<div className="Payment__wrapper__card-a_rreth"/>
						<div>
							<h6><FormattedMessage
									id="Payment.section_2.info2a"
									defaultMessage="Google Pay"
								/>
							</h6>
							<div className="Payment__wrapper__card-a_img2 bg"/>
						</div>
					</a>
				</div>
				<div className="Payment__wrapper__boody">
					<div className="row">
						<h6><FormattedMessage
							id="Payment.section_2.info2c"
							defaultMessage="Order summary"
							/>
						</h6>
					</div>
					<div className="row justify-content-between">
						<p>
							<FormattedMessage
							id="Payment.section_2.info3"
							defaultMessage="CoolVPN 3-year plan"
							/>
						</p>
						<p>
							<FormattedMessage
							id="Payment.section_2.info4"
							defaultMessage="$430.20"
							/>
						</p>
					</div>
					<div className="row justify-content-between">
						<p>
							<FormattedMessage
							id="Payment.section_2.info5"
							defaultMessage="Discount -70%"
							/>
						</p>
						<p>
							<FormattedMessage
							id="Payment.section_2.info6"
							defaultMessage="-$304.56"
							/>
						</p>
					</div>

					<div className="row justify-content-between font-weight-bold mt-4">
						<p>
							<FormattedMessage
							id="Payment.section_2.info7"
							defaultMessage="Total"
							/>
						</p>
						<p>
							<FormattedMessage
							id="Payment.section_2.info8"
							defaultMessage="USD $125.64"
							/>
						</p>
					</div>
					<hr />
					<div className="row">
						<h6><FormattedMessage
							id="Payment.section_2.info9"
							defaultMessage="Payment information"
							/>
						</h6>
					</div>
					<div className="row">
						<div className="col-12 col-lg-6">
							<InputLogin
								type="text"
								placeholder="First name"
								icon=""
							/>	
						</div>
						<div className="col-12 col-lg-6">
							<InputLogin
								type="text"
								placeholder="Last name"
								icon=""
							/>	
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-lg-6">
							<InputLogin
								type="number"
								placeholder="Card number"
								icon=""
							/>	
						</div>
						<div className="col-12 col-lg-6">
							<InputLogin
								type="text"
								placeholder="Expiration date  MM / YY"
								icon=""
							/>	
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-lg-3">
							<InputLogin
								type="number"
								placeholder="CVV"
								icon=""
							/>	
						</div>
						<div className="col-12 col-lg-4">
							<InputLogin
								type="number"
								placeholder="Postal code"
								icon=""
							/>	
						</div>
					</div>
					
					<div>
						<Botton link="/payment" offsetBtn={-150} txt="RequestSupport.section_1.btn"
							BGcolor="#8878BF" color="#fff" margin="20px 0 0 0"
							HoverBGcolor="transparent" HoverColor="#8878BF"
							border="1px solid #8878BF"
							HoverBorder="1px solid #8878BF"
							DfBtn="Continue"
						/>
					</div>
					
				</div>
			</div>
		</LayoutContainer>
	)
}

export default index
