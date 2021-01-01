import React from "react";
import { FormattedMessage } from "react-intl";

function SectionWV2() {
  return (
    <div className="SectionWV2 container">
      <h3>
        <FormattedMessage
          id="WhatIsVPN.section_2.title1"
          defaultMessage="VPN explained in 90 seconds"
        />
      </h3>
      <div className="row">
        <div className="col-sm-12 col-lg-5">
          <div className="SectionWV2__img1 bg" />
        </div>
        <div className="col-sm-12 col-lg-5">
          <p>
            <FormattedMessage
              id="WhatIsVPN.section_2.desc1"
              defaultMessage="A VPN (virtual private network) is the easiest and most effective way for people to protect their internet traffic and hide their identities online. As you connect to a secure VPN server, your internet traffic goes through an encrypted tunnel that nobody can see into, including hackers, governments, and your internet service provider"
            />
          </p>
        </div>
      </div>

      <h3>
        <FormattedMessage
          id="WhatIsVPN.section_2.title2"
          defaultMessage="VPN explained in 90 seconds II"
        />
      </h3>

      <div className="row">
        <div className="col-sm-12 col-lg-5">
          <p>
            <FormattedMessage
              id="WhatIsVPN.section_2.desc2b"
              defaultMessage="Consumers use VPNs to keep their online activity private and ensure access to sites and services that might otherwise be restricted."
            />
          </p>
          <p>
            <FormattedMessage
              id="WhatIsVPN.section_2.desc2a"
              defaultMessage="Companies use VPNs to connect far-flung employees as if they were all using the same local network at a central office, but with fewer benefits for individuals than a personal VPN."
            />
          </p>
        </div>
        <div className="col-sm-12 col-lg-5">
          <div className="SectionWV2__img2 bg" />
        </div>
      </div>
    </div>
  );
}

export default SectionWV2;
