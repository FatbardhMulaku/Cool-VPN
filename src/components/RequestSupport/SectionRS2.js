import React from "react";
import LayoutContainer from "../Shared/LayoutContainer";
import { contact } from "./data";
import Botton from "../UI/Button/ButtonNew";

function SectionRS2() {
  return (
    <LayoutContainer section="SectionRS2">
      <div className="row justify-content-center mb-5">
        {contact.map(({ title, desc }, idx) => (
          <div className="SectionRS2__box" key={idx}>
            <div className={`SectionRS2__box__img${idx + 1} bg my-auto`} />
            <div>
              <h6>{title}</h6>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <input type="text" placeholder="Full Name"></input>
        <input type="email" placeholder="Email Address"></input>
        <textarea placeholder="Message..."></textarea>
        <div>
          <Botton
            link="/contact"
            offsetBtn={-150}
            txt="RequestSupport.section_1.btn"
            BGcolor="#8878BF"
            color="#fff"
            margin="20px 0 0 0"
            HoverBGcolor="transparent"
            HoverColor="#8878BF"
            border="1px solid #8878BF"
            HoverBorder="1px solid #8878BF"
            DfBtn="Submit"
          />
        </div>
      </div>
    </LayoutContainer>
  );
}

export default SectionRS2;
