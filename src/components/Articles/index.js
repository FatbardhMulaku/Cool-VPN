import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionArt1 from "./SectionArt1";
import SectionArt2 from "./SectionArt2";
import SectionArt3 from "./SectionArt3";
import SectionArt4 from "./SectionArt4";
import SectionArt5 from "./SectionArt5";
import SectionArt6 from "./SectionArt6";
import SectionArt7 from "./SectionArt7";

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
        <SectionArt1 />
		<SectionArt2 />
		<SectionArt3 />
		<SectionArt4 />
		<SectionArt5 />
		<SectionArt6 />
		<SectionArt7 />
      </ThemeProvider>
    </div>
  );
};

export default index;