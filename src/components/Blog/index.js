import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionB1 from "./SectionB1";
import SectionB2 from "./SectionB2";
import SectionB3 from "./SectionB3";
import SectionB4 from "./SectionB4";

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
		    <SectionB1 />
			  <SectionB2 />
        <SectionB3 />
        <SectionB4 />
      </ThemeProvider>
    </div>
  );
};

export default index;