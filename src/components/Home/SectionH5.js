import React from "react";
import Textinfo from "./../Shared/Text/TextInfoNew";
import Butoni from "./../UI/Button/ButtonNew";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

function SectionH5() {
  return (
    <div className="SectionH5 ">
      <div className="SectionH5_wrapper container">
        <Fade left>
          <div>
            <Textinfo
              txt="Home.section_5"
              textAlign="left"
              color="white"
              margin="20px 0"
              DfTitle="How do I choose the right server to unblock websites?"
              DfDesc="To choose the right server to connect to, determine which country you need to be in to access the content you want. Then open the Cool VPN app on your device, select a server in that country, and connect. That's it! Once you're connected, you're free to enjoy your favorite content!"
            />

            <Butoni
              link="SectionH6"
              offsetBtn={-50}
              txt="Home.section_5.btn"
              BGcolor="#2D2E2D"
              color="#fff"
              margin="20px 0"
              HoverBGcolor="white"
              HoverColor="black"
              border="1px solid white"
              HoverBorder="1px solid white"
              DfBtn="Get  Cool VPN"
            />
          </div>
        </Fade>
        <Zoom>
          <div className="SectionH5__img bg m-auto" />
        </Zoom>
      </div>
    </div>
  );
}

export default SectionH5;
