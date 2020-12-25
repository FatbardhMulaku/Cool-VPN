import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionRH1 from "./SectionRH1";
import SectionRH2 from "./SectionRH2";
import Sec3 from "../AffiliateSales/SectionAS3";
import SectionRH4 from "./SectionRH4";

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
		    <SectionRH1 />
			<SectionRH2 />
			<Sec3 />
			<SectionRH4 />
      </ThemeProvider>
    </div>
  );
};

export default index;