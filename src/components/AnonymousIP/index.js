import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionAIP1 from "./SectionAIP1";
import SectionAIP2 from "./SectionAIP2";
import SectionAIP3 from "./SectionAIP3";

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
        <SectionAIP1 />
		<SectionAIP2 />
		<SectionAIP3 />
      </ThemeProvider>
    </div>
  );
};

export default index;