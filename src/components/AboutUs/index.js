import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionAU1 from "./SectionAU1";
import SectionAU2 from "./SectionAU2";
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
        <SectionAU1 />
        <SectionAU2 />
        <HelpSection />
      </ThemeProvider>
    </div>
  );
};

export default index;
