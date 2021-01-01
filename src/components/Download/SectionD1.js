import React from "react";
import { FormattedMessage } from "react-intl";
import LayoutGrid from "../Shared/LayoutGrid";
import TextInfo from "../Shared/Text/TextInfoNew";
import Botton from "../UI/Button/ButtonNew";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

function SectionD1() {
  const items = [
    "MacOS",
    "Windows",
    "Android",
    "iOS",
    "FireFox",
    "Chrome",
    "Linux",
    "Android TV",
  ];
  return (
    <LayoutGrid section="SectionD1">
      <div className="SectionD1__left col-sm-12 col-lg-6">
        <Fade top>
          <TextInfo
            txt="Download.section_1"
            textAlign="left"
            color="black"
            margin="0px"
            klasa="SectionD1__info"
            DfTitle="Download CoolVPN app for Mac"
            DfDesc="The fastest secure access to the internet on Mac."
          />
          <div className="row justify-content-center">
            <Botton
              link="/pricing"
              offsetBtn={-150}
              txt="Download.section_1.btn1"
              BGcolor="#8878BF"
              color="#fff"
              margin="10px"
              HoverBGcolor="transparent"
              HoverColor="#8878BF"
              border="1px solid #8878BF"
              DfBtn="Buy CoolVPN"
              HoverBorder="1px solid #8878BF"
            />
            <p>
              <FormattedMessage
                id="Download.section_1.or"
                defaultMessage="or"
              />
            </p>
            <Botton
              link="/pricing"
              offsetBtn={-150}
              txt="Download.section_1.btn2"
              BGcolor="transparent"
              color="#8878BF"
              margin="10px"
              HoverBGcolor="#8878BF"
              HoverColor="#fff"
              border="2px solid #8878BF"
              DfBtn="Try for free"
              HoverBorder="2px solid #8878BF"
            />
          </div>
        </Fade>
        <Bounce left cascade>
          <div className="row mt-4 justify-content-center">
            {items.map((item, index) => {
              return (
                <div key={index} className="SectionD1__left--box">
                  <div
                    className={`SectionD1__left--box__icon${index + 1} bg`}
                  />
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </Bounce>
      </div>
      <div className="SectionD1__right col-sm-12 col-lg-6 mt-5 mt-lg-1">
        <Zoom>
          <div className="SectionD1__right--img bg" />
        </Zoom>
      </div>
    </LayoutGrid>
  );
}

export default SectionD1;
