import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionBP1 from "./SectionBP1";
import SectionBP2 from "./SectionBP2";
import SectionBP3 from "./SectionBP3";
import SectionBP4 from "./SectionBP4";
import SectionBP5 from "./SectionBP5";
import SectionBP6 from "./SectionBP6";

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
        <SectionBP1 />
		<SectionBP2 />
		<SectionBP3 />
		<SectionBP4 />
		<SectionBP5 />
		<SectionBP6 />
      </ThemeProvider>
    </div>
  );
};

export default index;