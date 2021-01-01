import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import { FormattedMessage } from "react-intl";

function SectionArt2() {
  return (
    <LayoutGrid section="SectionArt2">
      <div className="col-sm-12 col-lg-2">
        <div className="SectionArt2__img1 bg" />
        <div className="SectionArt2__img2 bg" />
      </div>
      <div className="col-sm-12 col-lg-7">
        <h5>
          <FormattedMessage
            id="Product.section_2.desc1"
            defaultMessage="After dabbling in various Bitcoin-related ventures that have gone south in the past couple of years, Cameron and Tyler Winklevoss are betting on themselves by heading up the first regulated Bitcoin exchange"
          />
        </h5>
      </div>
      <div className="col-12 SectionArt2__s2">
        <p>
          <FormattedMessage
            id="Product.section_2.desc2"
            defaultMessage="The Coinbase exchange will allow individuals and companies to do business in about 
					half the states in the US where the company has regulatory approval. It will take a 
					0.25 percent cut of most transactions and waive fees for the first two months.
					Coinbase currently has 2.1 million consumer wallets and 38,000 merchants 
					processing Bitcoin payments through its platform. The company received $75 
					million in funding."
          />
        </p>
      </div>
    </LayoutGrid>
  );
}

export default SectionArt2;
