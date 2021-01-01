import React from "react";
import { FormattedMessage } from "react-intl";
import LayoutGrid from "../Shared/LayoutGrid";
import ImgCard from "../UI/Img/ImgCard";
import Bounce from "react-reveal/Bounce";
import { TxtList } from "./data";

function SectionD2() {
  return (
    <LayoutGrid section="SectionD2">
      <ImgCard
        cardCss="SectionD2__left col-sm-12 col-lg-6"
        img="SectionD2__left--img bg"
      />
      <div className="SectionD2__right col-sm-12 col-lg-6">
        <h3>
          <FormattedMessage
            id="Download.section_2.title"
            defaultMessage="Easy as 1-2-3"
          />
        </h3>
        <Bounce right cascade>
          <div className="col">
            {TxtList.map(({ title, desc }, index) => (
              <div key={index} className="SectionD2__right--box">
                <div className={`SectionD2__right--box__img${index + 1} bg`} />
                <div>
                  <h6>{title}</h6>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Bounce>
      </div>
    </LayoutGrid>
  );
}

export default SectionD2;
