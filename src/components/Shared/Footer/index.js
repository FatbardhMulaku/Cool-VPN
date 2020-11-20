import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionOne from "../Footer/SectionF1";
import SectionTwo from "../Footer/SectionF2";

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
	    	<SectionOne />
        <SectionTwo />
      </ThemeProvider>
    </div>
  );
};

export default index;