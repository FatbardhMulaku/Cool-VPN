import React from 'react';
import LayoutGrid from "../Shared/LayoutGrid";
import { TOPICS,RESOURCES, PAYMENT, BILLING,
Reference , Authentication, Errors
} from "./data";
function SectionAPI2() {
	return (
		<LayoutGrid section="SectionAPI2">
			<div className="col-sm-4 col-lg-3">
				<div className="SectionAPI2__box1 ">
					{TOPICS.map(({ title }, idx) => (
						<p key={idx} href="/">{title}</p>
						))}
				</div>

				<div className="SectionAPI2__box1 ">
					{RESOURCES.map(({ title }, idx) => (
						<p key={idx} href="/">{title}</p>
						))}
				</div>
				<div className="SectionAPI2__box1 ">
					{PAYMENT.map(({ title }, idx) => (
						<p key={idx} href="/">{title}</p>
						))}
				</div>
				<div className="SectionAPI2__box1 ">
					{BILLING.map(({ title }, idx) => (
						<p key={idx} href="/">{title}</p>
						))}
				</div>
				
				
			</div>
			<div className="col-sm-8 col-lg-9">
				<div className="SectionAPI2__box2 ">
					{Reference.map(({ desc }, idx) => (
						<p key={idx} href="/">{desc}</p>
						))}
				</div>
				<div className="SectionAPI2__box2 ">
					{Authentication.map(({ desc }, idx) => (
						<p key={idx} href="/">{desc}</p>
						))}
				</div>
				<div className="SectionAPI2__box2 ">
					{Errors.map(({ desc }, idx) => (
						<p key={idx} href="/">{desc}</p>
						))}
				</div>
			</div>
		</LayoutGrid>
	)
}

export default SectionAPI2;
