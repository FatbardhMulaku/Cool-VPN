import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionAff1 from "./SectionAff1";
import SectionAff2 from "./SectionAff2";
import SectionAff3 from "./SectionAff3";

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
        <SectionAff1 />
		<SectionAff2 />
		<SectionAff3 />
      </ThemeProvider>
    </div>
  );
};

export default index;