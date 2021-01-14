import React from "react";
import TextInfo from "../Shared/Text/TextInfoNew";
import LayoutContainer from "../Shared/LayoutContainer";
import Botton from "../UI/Button/ButtonNew";
import Fade from "react-reveal/Fade";

function SectionSv1() {
  return (
    <LayoutContainer section="SectionSv1">
      <Fade top big>
        <TextInfo
          txt="Servers.section_1"
          textAlign="left"
          color="white"
          margin="0px"
          klasa="SectionSv1__txt"
          DfTitle="CoolVPN Servers"
          DfDesc="5408 servers · 59 countries"
        />
      </Fade>
      <Fade bottom big>
        <div className="row justify-content-start">
          <Botton
            link="/pricing"
            offsetBtn={-150}
            txt="Servers.section_1.btn1"
            BGcolor="#8878BF"
            color="#fff"
            margin="10px"
            HoverBGcolor="transparent"
            HoverColor="#fff"
            border="1px solid #8878BF"
            HoverBorder="1px solid #8878BF"
            DfBtn="Get CoolVPN"
          />
          <Botton
            link="/latest-vpn-protocols"
            offsetBtn={-150}
            txt="Servers.section_1.btn2"
            BGcolor="transparent"
            color="#fff"
            margin="10px"
            HoverBGcolor="#8878BF"
            HoverColor="#fff"
            border="2px solid #8878BF"
            HoverBorder="2px solid #8878BF"
            DfBtn="Recommended server"
          />
        </div>
      </Fade>
    </LayoutContainer>
  );
}

export default SectionSv1;
