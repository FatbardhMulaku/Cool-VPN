import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionRS1 from "./SectionRS1";
import SectionRS2 from "./SectionRS2";
import SectionRS3 from "./SectionRS3";
import Section4 from "../WhyVPN/SectionWhyVpn3";

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
        <SectionRS1 />
        <SectionRS2 />
        <SectionRS3 />
        <Section4 />
      </ThemeProvider>
    </div>
  );
};

export default index;
