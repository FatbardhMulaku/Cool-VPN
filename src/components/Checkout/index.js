import React from 'react';
import LayoutContainer from "../Shared/LayoutContainer";
import Botton from "../UI/Button/ButtonNew";
import InfoTxt from "../Shared/Text/TextInfoNew";
import { Prices } from "./data";

function index() {
	return (
		<LayoutContainer section="Checkout">
			<div className="row">
				<Botton link="/checkout/#" offsetBtn={-150} txt="Checkout.section_1.btn1"
					BGcolor="#fff" color="#000" margin="10px"
					HoverBGcolor="transparent" HoverColor="#8878BF"
					border="2px solid #000"
					HoverBorder="2px solid #8878BF"
					DfBtn="1. Choose Plan"
				/>
				<Botton link="/payment" offsetBtn={-150} txt="Checkout.section_1.btn2"
					BGcolor="#fff" color="rgb(138, 138, 138)" margin="10px"
					HoverBGcolor="transparent" HoverColor="#8878BF"
					border="2px solid rgb(138, 138, 138)"
					HoverBorder="2px solid #8878BF"
					DfBtn="2. Payment"
				/>
			</div>

			<InfoTxt 
				txt="Checkout.section_1" textAlign="left" color="black" margin="40px 0" klasa="Checkout__txt"
				DfTitle="Encrypt your internet connection to protect your data and privacy." 
				DfDesc=" Access over 5,100 servers worldwide       No-logs policy      Connect 6 devices at the same time"
			/>
			<div className="row justify-content-center">
				{Prices.map(({ title, subtitle, btn, subdesc, desc}, idx) => (
					<a href="/checkout/#" className="Checkout__box" key={idx}>
						<div className="Checkout__box__img bg"/>
						<div> 
							<h6>{subtitle}</h6>
							<h2>&#65129;{title}</h2>
							<h3>{btn}</h3>
							<p>{desc}</p>
							<p>{subdesc}</p>
						</div>
					</a>
				))}
			</div>
			<div>
				<Botton link="/payment" offsetBtn={-150} txt="RequestSupport.section_1.btn"
					BGcolor="#8878BF" color="#fff" margin="20px 0 0 0"
					HoverBGcolor="transparent" HoverColor="#8878BF"
					border="1px solid #8878BF"
					HoverBorder="1px solid #8878BF"
					DfBtn="Continue to Payment"
				/>
			</div>

		</LayoutContainer>
	)
}

export default index;
