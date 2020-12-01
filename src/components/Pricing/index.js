import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SectionPr1 from "./SectionPr1";
import SectionPr2 from "./SectionPr2";
import SectionPr3 from "./SectionPr3";
import UserFeedbacks from "../Home/SectionH7";

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
		    <SectionPr1 />
        <SectionPr2 />
        <SectionPr3 />
        <UserFeedbacks />
      </ThemeProvider>
    </div>
  );
};

export default index;