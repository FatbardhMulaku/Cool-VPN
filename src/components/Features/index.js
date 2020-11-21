import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionFE1 from "../Features/SectionFe1";
import SectionFE2 from "../Features/SectionFe2";
import SectionFE3 from "../Features/SectionFe3";
import SectionFE4 from "../Features/SectionFe4";
import SectionFE5 from "../Features/SectionFe5";
import SectionFE6 from "../Features/SectionFe6";

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
		    <SectionFE1 />
			<SectionFE2 />
			<SectionFE3 />
			<SectionFE4 />
			<SectionFE5 />
			<SectionFE6 />
      </ThemeProvider>
    </div>
  );
};

export default index;