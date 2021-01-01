import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionLvpn1 from "./SectionLvpn1";
import SectionLvpn2 from "./SectionLvpn2";
import Features from "../AnonymousIP/SectionAIP3";

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
        <SectionLvpn1 />
        <SectionLvpn2 />
        <Features />
      </ThemeProvider>
    </div>
  );
};

export default index;
