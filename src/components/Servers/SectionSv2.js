import React from "react";
import TextInfo from "../Shared/Text/TextInfoNew";
import BoxServer from "./ServerBox";
import Botton from "../UI/Button/ButtonNew";

function SectionSv2() {
  return (
    <div className="SectionSv2 container">
      <TextInfo
        txt="Servers.section_2"
        textAlign="center"
        color="black"
        margin="30px 0 0 0"
        klasa="SectionSv2__txt"
        DfTitle="List of CoolVPN server locations"
        DfDesc="Choose VPN servers by country or region."
      />

      <BoxServer
        textAlign="left"
        NrBox={0}
        box="SectionSv2__box"
        box2="SectionSv2__box1"
        BoxBgGcolor="#8878BF"
        BoxColor="#fff"
        arrowIcon="SectionSv2__leftIconWhite"
        icon="SectionSv2__iconWhite"
      />

      <BoxServer
        textAlign="Right"
        NrBox={1}
        box="SectionSv2__box"
        box1="SectionSv2__box1"
        BoxColor="#000"
        BoxBorder="2px solid #919191"
        arrowIcon="SectionSv2__leftIconBlack"
        icon="SectionSv2__iconBlack"
      />

      <BoxServer
        textAlign="left"
        NrBox={2}
        box="SectionSv2__box"
        box2="SectionSv2__box1"
        BoxBgGcolor="#8878BF"
        BoxColor="#fff"
        arrowIcon="SectionSv2__leftIconWhite"
        icon="SectionSv2__iconWhite"
      />

      <BoxServer
        textAlign="Right"
        NrBox={3}
        box="SectionSv2__box"
        box1="SectionSv2__box1"
        BoxColor="#000"
        BoxBorder="2px solid #919191"
        arrowIcon="SectionSv2__leftIconBlack"
        icon="SectionSv2__iconBlack"
      />
      <div>
        <Botton
          link="/latest-vpn-protocols"
          offsetBtn={-150}
          txt="Servers.section_2.btn"
          BGcolor="#8878BF"
          color="#fff"
          margin="10px"
          HoverBGcolor="#fff"
          HoverColor="#8878BF"
          border="1px solid #8878BF"
          HoverBorder="1px solid #8878BF"
          DfBtn="Find the best server"
        />
      </div>
    </div>
  );
}

export default SectionSv2;
