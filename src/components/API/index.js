import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionAPI1 from "./SectionAPI1";
import SectionAPI2 from "./SectionAPI2";
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
        <SectionAPI1 />
        <SectionAPI2 />
        <HelpSection />
      </ThemeProvider>
    </div>
  );
};

export default index;
