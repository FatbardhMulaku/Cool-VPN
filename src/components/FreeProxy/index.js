import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionFP1 from "./SectionFP1";
import SectionFP2 from "./SectionFP2";
import SectionFP3 from "./SectionFP3";
import SectionFP4 from "./SectionFP4";
import HelpSection from "../Download/SectionD5";

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
        <SectionFP1 />
        <SectionFP2 />
        <SectionFP3 />
        <SectionFP4 />
        <HelpSection />
      </ThemeProvider>
    </div>
  );
};

export default index;
