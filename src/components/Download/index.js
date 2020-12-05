import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionD1 from "./SectionD1";
import SectionD2 from "./SectionD2";
import SectionD3 from "./SectionD3";
import SectionD4 from "./SectionD4";
import SectionD5 from "./SectionD5";

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
		    <SectionD1 />
        <SectionD2 />
        <SectionD3 />
        <SectionD4 />
        <SectionD5 />
      </ThemeProvider>
    </div>
  );
};

export default index;