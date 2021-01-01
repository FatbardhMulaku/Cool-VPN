import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import { FormattedMessage } from "react-intl";
import { Links } from "./data";
function SectionArt5() {
  return (
    <LayoutGrid section="SectionArt5" row="justify-content-center">
      <div className="col-sm-12 col-lg-6">
        <div className="SectionArt5__img bg" />
        <p>
          <FormattedMessage
            id="Product.section_5.desc1a"
            defaultMessage="With the first generation of Bitcoin businesses like Mt. Gox less 
						influential today, the hopes of ‘mass-marketizing’ virtual currencies 
						are held by venture capital-backed companies like BitPay, which 
						recently raised $30 million, Coinbase, which raised a $25 million 
						Series B round last year, and Circle. Interestingly, it looks like a 
						significant transaction took the cyber currency over today’s 
						landmark. "
          />
        </p>
        <div className="row">
          {Links.map(({ link }, idx) => (
            <a href="/" key={idx}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </LayoutGrid>
  );
}

export default SectionArt5;
