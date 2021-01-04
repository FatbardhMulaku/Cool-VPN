import React from "react";
import LayoutGrid from "./../Shared/LayoutGrid";
import TextGrid from "../Shared/Text/TextGrid";
import ImageGrid from "../UI/Img/ImgCard";

function SectionFe5() {
  return (
    <LayoutGrid section="SectionFe5">
      <TextGrid
        textCss="SectionFe5_text"
        tr="Features.section_5"
        btnId="Features.section_5.btn"
        btnTxt="Read More"
        link="SectionFe6"
        DfTitle="Protect & secure your WiFi connection"
        DfDesc="When you use a public WiFi hotspot, your entire browsing activity while connected to that hotspot could be monitored and spied on. It is very much possible that the next person sitting beside you can read your communication easily. Do you know, how easy it is for bad people to create devil twin WiFi Hotspots. Devil twin is like a mirror copy of the original WiFi, which confuses you, but in real it is a trap. When connected to public, unsecured WiFi network, most of your data - can be logged and monitored by almost anyone on the same network. With strong encryption and secure tunnelling, a VPN can help you improve your online security and make your IP invisible."
      />
      <ImageGrid cardCss="col-sm-12 col-lg-6 ImgC" img="SectionFe5__img bg" />
    </LayoutGrid>
  );
}

export default SectionFe5;
