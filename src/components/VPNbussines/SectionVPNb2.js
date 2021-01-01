import React from "react";
import TextInfo from "../Shared/Text/TextInfoNew";
import ImgTxt from "./ImgTxt";
import Botton from "../UI/Button/ButtonNew";

function SectionVPNb2() {
  return (
    <div className="SectionVPNb2 container">
      <TextInfo
        txt="VPNbussines.section_2"
        textAlign="center"
        color="black"
        margin="0px 0px 20px 0px"
        klasa="SectionVPNb2__txt"
        DfTitle="Access corporate data securely — wherever you are"
        DfDesc="Cutting-edge digital protection with a VPN for business"
      />

      <ImgTxt
        id="VPNbussines.section2a"
        textAlign="center"
        box="ImgTxt__box"
        box2="ImgTxt__box1"
        BoxColor="#000"
        BoxBorder="2px solid #919191"
        icon="ImgTxt__box__img1"
        Dtitle="Take full control of your network"
        Ddesc="CoolVPN Teams control panel enables you to manage every user account and feature from one centralized Control Panel"
      />

      <ImgTxt
        id="VPNbussines.section2b"
        textAlign="center"
        box1="ImgTxt__box1"
        box="ImgTxt__box"
        BoxBgGcolor="#8878BF"
        BoxColor="#fff"
        icon="ImgTxt__box__img2"
        Dtitle="Reach content in 33 countries"
        Ddesc="Connect to 3000+ servers around the world. Choose from 20+ dedicated server locations. Our global infrastructure means your team can easily reach international content"
      />

      <ImgTxt
        id="VPNbussines.section2c"
        textAlign="center"
        box="ImgTxt__box"
        box2="ImgTxt__box1"
        BoxColor="#000"
        BoxBorder="2px solid #919191"
        icon="ImgTxt__box__img3"
        Dtitle="Protect the whole team with a single invoice"
        Ddesc="CoolVPN Teams offers easy-to-use centralized billing. This means you won’t have to sort out payment every time you add a new user"
      />

      <div>
        <Botton
          link="SectionVPNb3"
          offsetBtn={-150}
          txt="VPNbussines.section_2.btn"
          BGcolor="#8878BF"
          color="#fff"
          margin="10px"
          HoverBGcolor="#fff"
          HoverColor="#8878BF"
          border="1px solid #8878BF"
          HoverBorder="1px solid #8878BF"
          DfBtn="Explore features"
        />
      </div>
    </div>
  );
}

export default SectionVPNb2;
