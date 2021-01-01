import React from "react";
import { FormattedMessage } from "react-intl";
import LayoutGrid from "../Shared/LayoutGrid";
import ImgCard from "../UI/Img/ImgCard";
import Bounce from "react-reveal/Bounce";
import { TxtList } from "./data";

function SectionD3() {
  return (
    <LayoutGrid section="SectionD2">
      <div className="SectionD2__right col-sm-12 col-lg-6">
        <h3>
          <FormattedMessage
            id="Download.section_3.titleID"
            defaultMessage="Easy as 1-2-3"
          />
        </h3>
        <Bounce left cascade>
          <div className="col">
            {TxtList.map(({ title, desc }, index) => (
              <div key={index} className="SectionD2__right--box">
                <div className={`SectionD3__right--box__img${index + 1} bg`} />
                <div>
                  <h6>{title}</h6>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Bounce>
      </div>
      <ImgCard
        cardCss="SectionD3__left col-sm-12 col-lg-6"
        img="SectionD3__left--img bg"
      />
    </LayoutGrid>
  );
}

export default SectionD3;
