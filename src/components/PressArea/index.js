import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionPA1 from "./SectionPA1";
import SectionPA2 from "./SectionPA2";
import SectionPA3 from "./SectionPA3";
import SectionPA4 from "./SectionPA4";
import SectionPA5 from "./SectionPA5";
import SectionPA6 from "./SectionPA6";
import SectionPA7 from "./SectionPA7";
import SectionPA8 from "./SectionPA8";

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
        <SectionPA1 />
        <SectionPA2 />
        <SectionPA3 />
        <SectionPA4 />
        <SectionPA5 />
        <SectionPA6 />
        <SectionPA7 />
        <SectionPA8 />
      </ThemeProvider>
    </div>
  );
};

export default index;
