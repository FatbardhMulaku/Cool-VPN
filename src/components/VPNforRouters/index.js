import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionVPNr1 from "./SectionVPNr1";
import SectionVPNr2 from "./SectionVPNr2";
import SectionVPNr3 from "./SectionVPNr3";
import SectionVPNr4 from "./SectionVPNr4";
import SectionVPNr5 from "./SectionVPNr5";
import SectionVPNr6 from "./SectionVPNr6";
import SectionVPNr7 from "./SectionVPNr7";
import SectionVPNr8 from "./SectionVPNr8";
import SectionVPNr9 from "./SectionVPNr9";

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
        <SectionVPNr1 />
		<SectionVPNr2 />
		<SectionVPNr3 />
		<SectionVPNr4 />
		<SectionVPNr5 />
		<SectionVPNr6 />
		<SectionVPNr7 />
		<SectionVPNr8 />
		<SectionVPNr9 />
      </ThemeProvider>
    </div>
  );
};

export default index;
