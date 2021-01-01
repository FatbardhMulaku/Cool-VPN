import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionWhyVpn1 from "./SectionWhyVpn1";
import SectionWhyVpn2 from "./SectionWhyVpn2";
import SectionWhyVpn3 from "./SectionWhyVpn3";

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
        <SectionWhyVpn1 />
        <SectionWhyVpn2 />
        <SectionWhyVpn3 />
      </ThemeProvider>
    </div>
  );
};

export default index;
