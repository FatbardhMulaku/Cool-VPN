import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionPd1 from "./SectionPd1";
import SectionPd2 from "./SectionPd2";
import SectionPd3 from "./SectionPd3";
import SectionPd4 from "./SectionPd4";
import SectionPd5 from "./SectionPd5";

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
        <SectionPd1 />
      <SectionPd2 />
      <SectionPd3 />
      <SectionPd4 />
      <SectionPd5 />
      </ThemeProvider>
    </div>
  );
};

export default index;