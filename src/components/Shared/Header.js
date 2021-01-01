import React, { Fragment } from "react";
import Toolbar from "./Navigation/Toolbar";
import MobileMenu from "./MobileMenu/MobileMenu";
import { useToggle } from "../../Hooks/useToogleHead";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1250,
    },
  },
});

const Header = (props) => {
  const [isToggled, setToggled] = useToggle(false);

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Toolbar
          drawerToggle={setToggled}
          BcolorScroll={props.BCs}
          Bcolor={props.BC}
          ColorT={props.TXT}
          LogoL={props.LO}
          ColorBTN={props.BTN}
        />
        <MobileMenu drawerToggle={setToggled} isToggled={isToggled} />
      </ThemeProvider>
    </Fragment>
  );
};
export default Header;
