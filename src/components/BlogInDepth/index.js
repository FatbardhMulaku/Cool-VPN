import React from "react";
import LayoutContainer from "../Shared/LayoutContainer";
import { FormattedMessage } from "react-intl";
import { TxtData } from "./data";
import Botton from "../UI/Button/ButtonNew";

function index() {
  return (
    <LayoutContainer section="blogInDepth">
      <h2>
        <FormattedMessage
          id="blogInDepth.section_1.title"
          defaultMessage="What search engines can tell us about internet restrictions"
        />
      </h2>
      <div className="blogInDepth__img bg mx-auto" />

      <p>
        <FormattedMessage
          id="blogInDepth.section_1.desc"
          defaultMessage="Search engine metrics are more than plain numbers — they can tell us a lot about the world we live in, our daily habits, and even the political situation. The CoolVPN research team picked two keywords, “access” and “unblock,” to see where they lead on Google."
        />
      </p>

      {TxtData.map(({ title, txt1, txt2, txt3, txt4, txt5 }, idx) => (
        <div className="blogInDepth--box" key={idx}>
          <h5>{title}</h5>
          <p>{txt1}</p>
          <p>{txt2}</p>
          <p>{txt3}</p>
          <p>{txt4}</p>
          <p>{txt5}</p>
        </div>
      ))}

      <h6>
        <FormattedMessage
          id="blogInDepth.section_1.desc41"
          defaultMessage="Enjoy your favorite content without limits with CoolVPN."
        />
      </h6>
      <div>
        <Botton
          link="/pricing"
          offsetBtn={-150}
          txt="blogInDepth.section_1.btn"
          BGcolor="#8878BF"
          color="#fff"
          margin="0px"
          HoverBGcolor="transparent"
          HoverColor="#8878BF"
          border="1px solid #8878BF"
          HoverBorder="1px solid #8878BF"
          DfBtn="GET CoolVPN"
        />
      </div>
    </LayoutContainer>
  );
}

export default index;
