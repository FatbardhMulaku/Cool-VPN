import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import InfoTxt from "../Shared/Text/TextInfoNew";
import Botton from "../UI/Button/ButtonNew";
import { List } from "./data";

function SectionAff1() {
  return (
    <LayoutGrid section="SectionAff1">
      <div className="col-sm-12 col-lg-7">
        <InfoTxt
          txt="Affiliate.section_1"
          textAlign="left"
          color="white"
          margin="0px"
          klasa="SectionAff1__txt"
          DfTitle="Join the CoolVPN Affiliate Program"
          DfDesc="Join us and start earning money today."
        />
        <div>
          {List.map(({ txt }, idx) => (
            <div key={idx} className="SectionAff1__line">
              <div className="SectionAff1__line--img bg" />
              <p>{txt}</p>
            </div>
          ))}
        </div>
        <div className="row my-2">
          <Botton
            link="/become-partner"
            offsetBtn={-150}
            txt="Affiliate.section_1.btn1"
            BGcolor="#fff"
            color="#000"
            margin="10px"
            HoverBGcolor="transparent"
            HoverColor="#fff"
            border="1px solid #000"
            HoverBorder="1px solid #fff"
            DfBtn="Become an affliate"
          />
          <Botton
            link="/become-partner"
            offsetBtn={-150}
            txt="Affiliate.section_1.btn2"
            BGcolor="transparent"
            color="#fff"
            margin="10px"
            HoverBGcolor="#fff"
            HoverColor="#000"
            border="1px solid #fff"
            HoverBorder="1px solid #000"
            DfBtn="SAffiliate Log in"
          />
        </div>
      </div>
    </LayoutGrid>
  );
}

export default SectionAff1;
