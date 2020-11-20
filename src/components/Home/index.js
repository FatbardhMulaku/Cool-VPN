import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionOne from "../Home/SectionH1";
import SectionTwo from "../Home/SectionH4";
import SectionThree from "../Home/SectionH5"
import SectionH4 from "../Home/SectionH6"
import SectionH5 from "../Home/SectionH7"

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
		    <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionH4 />
        <SectionH5 />
      </ThemeProvider>
    </div>
  );
};

export default index;