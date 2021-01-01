import React from "react";
import TextInfo from "../Shared/Text/TextInfoNew";
import Botton from "../UI/Button/ButtonNew";
import Zoom from "react-reveal/Zoom";

function SectionFe6() {
  return (
    <div className="SectionFe6">
      <Zoom>
        <div className="contaFe6__box container">
          <div className="SectionFe6__txt">
            <TextInfo
              txt="Features.section_6"
              textAlign="left"
              color="#2D2E2D"
              margin="0px"
              klasa="SectionFe6__txt"
              DfTitle="Devil twin is like a mirror copy of the original WiFi"
              DfDesc="AnyVPN is trusted by more than 5 miollion users because we are different. Checkout some of the features which set us apart from other VPN providers out there."
            />

            <div>
              <Botton
                linkBtn="SectionFe1"
                offsetBtn={-150}
                txt="Features.section_6.btn"
                BGcolor="#8878BF"
                color="#fff"
                margin="0px"
                HoverBGcolor="transparent"
                HoverColor="#8878BF"
                border="1px solid #8878BF"
                HoverBorder="1px solid #8878BF"
                DfBtn="Learn more..."
              />
            </div>
          </div>
          <div className="SectionFe6__img bg" />
        </div>
      </Zoom>
    </div>
  );
}

export default SectionFe6;
