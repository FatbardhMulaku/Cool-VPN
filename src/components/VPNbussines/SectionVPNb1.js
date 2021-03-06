import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import TextInfo from "../Shared/Text/TextInfoNew";
import ImgCard from "../UI/Img/ImgCard";
import Botton from "../UI/Button/ButtonNew";
import Fade from "react-reveal/Fade";

function SectionVPNb1() {
  return (
    <LayoutGrid section="SectionVPNb1">
      <div className="col-sm-12 col-lg-6">
        <Fade top big>
          <TextInfo
            txt="VPNbussines.section_1"
            textAlign="left"
            color="white"
            margin="0px"
            klasa="SectionVPNb1__txt"
            DfTitle="Protect your business network with a cloud VPN"
            DfDesc="Get simple and secure remote access from the world’s most trusted VPN brand"
          />
        </Fade>
        <Fade bottom big>
          <div className="row ">
            <Botton
              link="/pricing"
              offsetBtn={-150}
              txt="VPNbussines.section_1.btn1"
              BGcolor="#8878BF"
              color="#fff"
              margin="20px 10px 10px 0"
              HoverBGcolor="#fff"
              HoverColor="#8878BF"
              border="1px solid #8878BF"
              HoverBorder="1px solid #8878BF"
              DfBtn="Start Now"
            />
            <Botton
              link="/pricing"
              offsetBtn={-150}
              txt="VPNbussines.section_1.btn2"
              BGcolor="transparent"
              color="#fff"
              margin="20px 0 10px 10px"
              HoverBGcolor="#fff"
              HoverColor="#000"
              border="1px solid #fff"
              HoverBorder="1px solid #8878BF"
              DfBtn="Request free consultation"
            />
          </div>
        </Fade>
      </div>
      <ImgCard cardCss="col-sm-12 col-lg-6" img="SectionVPNb1__img" />
    </LayoutGrid>
  );
}

export default SectionVPNb1;
