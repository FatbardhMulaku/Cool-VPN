import React, { useState } from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import UserFeedbacks from "./UserFeedbacks";
import { FormattedMessage } from "react-intl";
import TextInfo from "../Shared/Text/TextInfoNew";
import Buttoni from "../UI/Button/ButtonNew";
import Fade from "react-reveal/Fade";
import { UserFeedbacksData } from "./data";

function SectionH7() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <LayoutGrid section="SectionH7 bg" id="section-h7">
      <div className="col-sm-12 col-lg-6 mb-sm-5">
        <Fade top big cascade>
          <h5>
            <FormattedMessage
              id="Home.section_7.subtitle"
              defaultMessage="User Feedbacks"
            />
          </h5>
        </Fade>

        <TextInfo
          txt="Home.section_7"
          textAlign="left"
          color="black"
          margin="20px"
          klasa="SectionH7__txt"
          DfTitle="See what peoples tell about us"
          DfDesc="Your privacy matters! Unlike other VPN providers,Coolvpn keeps NO LOGS of any kind. We respect your right to online privacy"
        />
        <Buttoni
          link="SectionH4"
          offsetBtn={-150}
          txt="Home.section_7.btn"
          BGcolor="#2D2E2D"
          color="#fff"
          margin="20px"
          HoverBGcolor="transparent"
          HoverColor="#2D2E2D"
          border="1px solid black"
          HoverBorder="1px solid #2D2E2D"
          DfBtn="Try CoolVPN now"
        />
      </div>

      <div className="col-sm-12 col-lg-6 d-flex flex-column">
        {UserFeedbacksData.map(({ name, title, answer }, index) => (
          <UserFeedbacks
            key={index}
            index={index}
            expanded={expanded}
            handleChange={handleChange}
            icon={`SectionH7__icon${index + 1}`}
            name={name}
            stars={5 - index}
            title={title}
            answer={answer}
          />
        ))}
      </div>
    </LayoutGrid>
  );
}

export default SectionH7;
