import React from 'react';
import LayoutContainer from "../Shared/LayoutContainer";
import Protocols from "./Protocols";
import { ProtocolList } from "./data";
function SectionLvpn2() {

	return (
		<LayoutContainer section="SectionLvpn2">

			{ProtocolList.map(({ title, desc}, idx) => (
				<Protocols 
				key={idx+1}
				txt={`LatestVPNprotocols.section_2_${idx+1}`}
				title={title} 
				desc={desc}
				BGcolor={`Protocols__color${idx+1}`}
			/>
			))}
		</LayoutContainer>
	)
}

export default SectionLvpn2;
