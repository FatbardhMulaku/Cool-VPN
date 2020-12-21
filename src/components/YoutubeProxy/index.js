import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionYP1 from "./SectionYP1";
import SectionYP2 from "./SectionYP2";
import SectionYP3 from "./SectionYP3";
import Benefits from "../FreeProxy/SectionFP3";
import Experience from "../FreeProxy/SectionFP4";
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
        <SectionYP1 />
        <SectionYP2 />
        <SectionYP3 />
        <Benefits />
        <Experience />
        <HelpSection />
      </ThemeProvider>
    </div>
  );
};

export default index;
