import React from 'react';
import LayoutGrid from "../Shared/LayoutGrid";
import { TitleList } from "./data";
import Botton from "../UI/Button/ButtonNew";

function SectionPd1() {
	return (
		<LayoutGrid section="SectionPd1 bg">
			<div className="col-sm-12 col-lg-6">
				{TitleList.map(({ title}, idx) => (
					<div  key={idx}>
							<p>{title}</p>
					</div>
				))}
				<div className="row my-2">
				<Botton link="/pricing" offsetBtn={-150} txt="Product.section_1.btn1"
					BGcolor="#fff" color="#000" margin="10px"
					HoverBGcolor="transparent" HoverColor="#fff"
					border="1px solid #000"
					HoverBorder="1px solid #fff"
					DfBtn="Get CoolVPN "
				/>
				<Botton link="SectionPd2" offsetBtn={-150} txt="Product.section_1.btn2"
				BGcolor="transparent" color="#fff" margin="10px"
				HoverBGcolor="#fff" HoverColor="#000"
				border="1px solid #fff"
				HoverBorder="1px solid #000"
				DfBtn="Learn more"
			/>
			</div>
			</div>
			<div className="col-sm-12 col-lg-5 justify">
					<div className="SectionPd1__img bg"/>
			</div>
		</LayoutGrid>
	)
}

export default SectionPd1;
