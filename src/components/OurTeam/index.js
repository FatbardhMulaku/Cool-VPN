import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionOT1 from "./SectionOT1";
import SectionOT2 from "./SectionOT2";
import SectionOT3 from "./SectionOT3";

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
        <SectionOT1 />
		<SectionOT2 />
		<SectionOT3 />
      </ThemeProvider>
    </div>
  );
};

export default index;