import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import Buttoni from "../UI/Button/ButtonNew";
import { FormattedMessage } from "react-intl";
import SectionTwo from "./SectionH2";
import SectionTree from "./SectionH3";
import Fade from "react-reveal/Fade";

function SectionH1() {
  return (
    <LayoutGrid section="sectionH1 bg imgBG" id="section-1">
      <Fade left cascade>
        <div className="col-sm-12 col-lg-6 my-4 sectionH1__left">
          <h1>
            <FormattedMessage
              id="Home.section_1.title"
              defaultMessage="Feel safe online, anytime, anywhere."
            />
          </h1>
          <hr className="SectionH1__hr" />
          <p>
            <FormattedMessage
              id="Home.section_1.desc"
              defaultMessage="High speed, ultra secure, and easy to use. Instant setup."
            />
          </p>

          <div>
            <Buttoni
              link="SectionH3"
              offsetBtn={-150}
              txt="Home.section_1.btn1"
              BGcolor="#fff"
              color="#000"
              HoverBGcolor="transparent"
              HoverColor="#fff"
              border="1px solid transparent"
              margin="0 20px 0 0"
              HoverBorder="1px solid #fff"
              DfBtn="Try Cool VPN"
            />
            <Buttoni
              link="SectionH3"
              offsetBtn={-150}
              txt="Home.section_1.btn2"
              BGcolor="transparent"
              color="#fff"
              HoverBGcolor="#fff"
              HoverColor="#000"
              border="1px solid #fff"
              margin="0 20px 0 0"
              HoverBorder="1px solid #fff"
              DfBtn="Tour"
            />
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="col-sm-12 col-lg-6 sectionH1__right">
          <div className="sectionH1__box1">
            <div className="sectionH1__right--icon bg" />
            <div>
              <p>100%</p>
              <p>
                <FormattedMessage
                  id="Home.section_1.info1"
                  defaultMessage="SAFE ONLINE"
                />
              </p>
            </div>
          </div>
          <div className="sectionH1__img1 bg" />
          <div className="sectionH1__img2 bg" />
          <div className="sectionH1__box2">
            <div className="sectionH1__right--icon2 bg" />
            <div>
              <p>
                <FormattedMessage
                  id="Home.section_1.info2a"
                  defaultMessage="Disappear"
                />
              </p>
              <p>
                <FormattedMessage
                  id="Home.section_1.info2b"
                  defaultMessage="Be cool. Be invisible and secure"
                />
              </p>
            </div>
          </div>
        </div>
      </Fade>
      <SectionTwo />
      <SectionTree />
    </LayoutGrid>
  );
}

export default SectionH1;
