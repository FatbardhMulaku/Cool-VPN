import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionSv1 from "./SectionSv1";
import SectionSv2 from "./SectionSv2";
import SectionSv3 from "./SectionSv3";
import SectionSv4 from "./SectionSv4";

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
        <SectionSv1 />
        <SectionSv2 />
        <SectionSv3 />
        <SectionSv4 />
      </ThemeProvider>
    </div>
  );
};

export default index;