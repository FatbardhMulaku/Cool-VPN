import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionFAQ1 from "./SectionFAQ1";
import SectionFAQ2 from "./SectionFAQ2";
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
        <SectionFAQ1 />
		    <SectionFAQ2 />
        <HelpSection />
      </ThemeProvider>
    </div>
  );
};

export default index;