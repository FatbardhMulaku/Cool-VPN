import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import Button from "../UI/Button/ButtonNew";
import Fade from "react-reveal/Fade";
import { CardBtn } from "./data";

function SectionS2() {
  return (
    <LayoutGrid section="SectionS2">
      <Fade bottom>
        {CardBtn.map(({ btn }, index) => (
          <div key={index} className="SectionS2__box">
            <div className={`SectionS2__img${index + 1} bg`} />

            <Button
              linkBtn="SectionS3"
              offsetBtn={-100}
              txt={`Support.section_2.btn${index + 1}`}
              BGcolor="#fff"
              color="#8878BF"
              margin="0px"
              HoverBGcolor="#8878BF"
              HoverColor="#fff"
              border="1px solid #8878BF"
              HoverBorder="1px solid #8878BF"
              DfBtn={btn}
            />
          </div>
        ))}
      </Fade>
    </LayoutGrid>
  );
}

export default SectionS2;
