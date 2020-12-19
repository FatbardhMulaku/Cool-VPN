import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionPP1 from "./SectionPP1";
import SectionPP2 from "./SectionPP2";

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
        <SectionPP1 />
		<SectionPP2 />
      </ThemeProvider>
    </div>
  );
};

export default index;