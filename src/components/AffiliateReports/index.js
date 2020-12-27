import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionAfR1 from "./SectionAfR1";
import SectionAfR2 from "./SectionAfR2";

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
		<SectionAfR1 />
		<SectionAfR2 />

      </ThemeProvider>
    </div>
  );
};

export default index;