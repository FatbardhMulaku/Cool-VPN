import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionVPNb1 from "./SectionVPNb1";
import SectionVPNb2 from "./SectionVPNb2";
import SectionVPNb3 from "./SectionVPNb3";
import Faqs from "../Download/SectionD4";
import SectionVPNb4 from "./SectionVPNb4";
import SectionVPNb5 from "./SectionVPNb5";

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
        <SectionVPNb1 />
		    <SectionVPNb2 />
        <SectionVPNb3 />
        <SectionVPNb4 />
        <Faqs />
        <SectionVPNb5 />
      </ThemeProvider>
    </div>
  );
};

export default index;