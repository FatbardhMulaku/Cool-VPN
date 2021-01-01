import React from "react";
import { FormattedMessage } from "react-intl";
import LayoutContainer from "../Shared/LayoutContainer";
import Botton from "../UI/Button/ButtonNew";

function SectionYP2() {
  return (
    <LayoutContainer section="SectionYP2">
      <p>
        <FormattedMessage
          id="FreeProxy.section_2.desc1"
          defaultMessage="Enter Web address"
        />
      </p>
      <div>
        <input
          type="text"
          placeholder="http://youtube.com/wtach/v=tyxbgh890OJYh"
        ></input>
      </div>

      <div className="row">
        <label className="SectionYP2__control SectionYP2__control-radio">
          Encrypt URL
          <input type="radio" name="radio" defaultChecked />
          <div className="SectionYP2__control_indicator"></div>
        </label>
        <label className="SectionYP2__control SectionYP2__control-radio">
          All Cookies
          <input type="radio" name="radioa" defaultChecked />
          <div className="SectionYP2__control_indicator"></div>
        </label>
        <label className="SectionYP2__control SectionYP2__control-radio">
          Remove Object
          <input type="radio" name="radio" defaultChecked />
          <div className="SectionYP2__control_indicator"></div>
        </label>
        <label className="SectionYP2__control SectionYP2__control-radio">
          Encrypt Page
          <input type="radio" name="radio" defaultChecked />
          <div className="SectionYP2__control_indicator"></div>
        </label>
        <label className="SectionYP2__control SectionYP2__control-radio">
          Remove Scripts
          <input type="radio" name="radio" defaultChecked />
          <div className="SectionYP2__control_indicator"></div>
        </label>
      </div>

      <div>
        <Botton
          link="/become-partner"
          offsetBtn={-150}
          txt="FreeProxy.section_2.btn"
          BGcolor="#8878BF"
          color="#fff"
          margin="30px 0 0 0"
          HoverBGcolor="transparent"
          HoverColor="#000"
          border="1px solid #8878BF"
          HoverBorder="1px solid #000"
          DfBtn="Visit Anonymously"
        />
      </div>
    </LayoutContainer>
  );
}

export default SectionYP2;
