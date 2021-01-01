import React from "react";
import TextInfo from "../Shared/Text/TextInfoNew";

function SectionC1() {
  return (
    <div className="SectionC1 gb">
      <div className="container">
        <TextInfo
          txt="ContactUs.section_1"
          textAlign="left"
          color="white"
          margin="0px"
          klasa="SectionC1__info font-weight-bold"
          DfTitle="If there is any reason you would like to talk with us, please get in touch"
          DfDesc="Just like you, we are real people, so we prefer to communicate the same way you do. Please shoot our teams an email on one of the addresses below. Alternatively, you can chat online with one of our friendly representatives directly. You can even call us on the telephone machine if you are so inclined."
        />
      </div>
    </div>
  );
}

export default SectionC1;
