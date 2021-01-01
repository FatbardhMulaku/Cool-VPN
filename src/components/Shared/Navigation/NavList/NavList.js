import React from "react";
import "./styles/NavList.css";
import "./styles/NavigationLink.css";
import NavigationLink from "./NavigationLink";
/* import useScrollTrigger from "@material-ui/core/useScrollTrigger"; */
import IndustriesDropdown from "../../../UI/Popper/Industries/Industries";
import AboutDropdown from "../../../UI/Popper/About/About";
import { mainMenu } from "./../data";

function NavList(props) {
  /* const { window } = props; */

/*   const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: window ? window() : undefined,
  }); */
  return (
    <div className="nav_list">
      <ul>
      {/* <IndustriesDropdown trigger={trigger} />
        <AboutDropdown trigger={trigger} /> */}
        <IndustriesDropdown  />
        <AboutDropdown />
        {mainMenu.map(({ link, name }, index) => (
          <NavigationLink link={`/${link}`} key={index}  CTXT={props.ColorTXT}>
            {name}
          </NavigationLink>
        ))}
      </ul>
    </div>
  );
}

export default NavList;
