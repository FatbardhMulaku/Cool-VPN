import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionAS1 from "./SectionAS1";
import SectionAS2 from "./SectionAS2";
import SectionAS3 from "./SectionAS3";
import SectionAS4 from "./SectionAS4";
import SectionAS5 from "./SectionAS5";

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
        <SectionAS1 />
        <SectionAS2 />
        <SectionAS3 />
        <SectionAS4 />
        <SectionAS5 />
      </ThemeProvider>
    </div>
  );
};

export default index;
