import React from "react";
import { FormattedMessage } from "react-intl";
import LayoutGrid from "../Shared/LayoutGrid";
import TextInfo from "../Shared/Text/TextInfoNew";
import Botton from "../UI/Button/ButtonNew";
import { Link } from "react-router-dom";

function SectionSv3() {
  return (
    <LayoutGrid section="SectionSv3 bg">
      <div className="col-sm-12 col-lg-6 flex-column">
        <TextInfo
          txt="Servers.section_3"
          textAlign="left"
          color="white"
          margin="0px"
          klasa="SectionSv2__txt"
          DfTitle="Find the best server for your needs"
          DfDesc="CoolVPN’s smart algorithm automatically selects the best VPN server for you based on location, loads, or your special requirements."
        />
        <div>
          <Botton
            link="/latest-vpn-protocols"
            offsetBtn={-150}
            txt="Servers.section_3.btn"
            BGcolor="#8878BF"
            color="#fff"
            margin="10px"
            HoverBGcolor="#fff"
            HoverColor="#8878BF"
            border="1px solid #fff"
            HoverBorder="1px solid #8878BF"
            DfBtn="Find the best server"
          />
        </div>
      </div>
      <div className="col-sm-12 col-lg-6">
        <div className="SectionSv3__BGimg bg">
          <div className="SectionSv3__BGimg--box">
            <div>
              <div>
                <h5>Us1235.coolvpn.com</h5>
                <div className="SectionSv2__iconCountry1" />
              </div>
              <p>United States#1235</p>
            </div>
            <div>
              <Link to="/">
                <FormattedMessage
                  id="Servers.section_3.btn1a"
                  defaultMessage="UDPS & TCP configs"
                />
              </Link>
              <Link to="/">
                <FormattedMessage
                  id="Servers.section_3.btn1b"
                  defaultMessage="See tutorials"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LayoutGrid>
  );
}

export default SectionSv3;
