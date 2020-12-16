import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionWV1 from "./SectionWV1";
import SectionWV2 from "./SectionWV2";
import SectionWV3 from "./SectionWV3";
import SectionWV4 from "./SectionWV4";
import SectionWV5 from "./SectionWV5";
import SectionWV6 from "./SectionWV6";
import SectionWV7 from "./SectionWV7";
import SectionWV8 from "./SectionWV8";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
});

const index = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <SectionWV1 />
		    <SectionWV2 />
		    <SectionWV3 />
        <SectionWV4 />
        <SectionWV5 />
        <SectionWV6 />
        <SectionWV7 />
        <SectionWV8 />
      </ThemeProvider>
    </div>
  );
};

export default index;