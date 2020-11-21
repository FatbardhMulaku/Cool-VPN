import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionFE1 from "../Features/SectionFe1";


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
      </ThemeProvider>
    </div>
  );
};

export default index;