import React from "react";
import TextInfo from "../Shared/Text/TextInfoNew";
import Zoom from "react-reveal/Zoom";
import { CardList } from "./data";

function SectionPr2() {
  return (
    <div className="SectionPr2 container">
      <TextInfo
        txt="Pricing.section_2"
        textAlign="left"
        color="black"
        margin="0px"
        klasa="SectionPr1__info"
        DfTitle="Included in every package"
        DfDesc="Encrypts your internet connection, and allows you to browse the internet anonymously. Unblock popular websites where you live"
      />

      <Zoom cascade>
        <div className="row justify-content-center mt-5">
          {CardList.map(({ title, desc }, index) => (
            <div key={index} className={`SectionPr2__img${index + 1} bg`}>
              <div className={`SectionPr2__icon${index + 1} bg`} />
              <TextInfo
                txt={`Pricing.section_2.items${[index + 1]}`}
                textAlign="left"
                color="white"
                margin="0px"
                klasa="SectionPr2__info"
                DfTitle={title}
                DfDesc={desc}
              />
            </div>
          ))}
        </div>
      </Zoom>
    </div>
  );
}

export default SectionPr2;
