import React from "react";
import { FormattedMessage } from "react-intl";
import LayoutGrid from "../Shared/LayoutGrid";
import InfoTxt from "../Shared/Text/TextInfoNew";
import Botton from "../UI/Button/ButtonNew";

function SectionRH1() {
  return (
    <LayoutGrid section="SectionRH1">
      <div className="col-sm-12 col-md-7 col-lg-5 col-xl-4">
        <InfoTxt
          txt="ResellerHistory.section_1"
          textAlign="left"
          color="white"
          margin="0px"
          klasa="SectionRH1__txt"
          DfTitle="VPN Reseller Program"
          DfDesc="100% money-back guarantee within your first 30 days of service"
        />
        <div>
          <Botton
            link="SectionAS4"
            offsetBtn={-150}
            txt="ResellerHistory.section_1.btn"
            BGcolor="#fff"
            color="#000"
            margin="20px 0 0 0"
            HoverBGcolor="transparent"
            HoverColor="#fff"
            border="1px solid #fff"
            HoverBorder="1px solid #fff"
            DfBtn="Start earning now"
          />
        </div>
        <div>
          <p>
            <FormattedMessage
              id="ResellerHistory.section_1.title4"
              defaultMessage="Already an affiliate?"
            />
          </p>
          <a href="/Login">
            <FormattedMessage
              id="ResellerHistory.section_1.title5"
              defaultMessage="Sign In"
            />
          </a>
        </div>
      </div>
    </LayoutGrid>
  );
}

export default SectionRH1;
