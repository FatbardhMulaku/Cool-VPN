import React from "react";
import "./styles/NavList.css";
import "./styles/NavigationLink.css";
import NavigationLink from "./NavigationLink";
/* import useScrollTrigger from "@material-ui/core/useScrollTrigger"; */
import { useTranslation } from "react-i18next";
import IndustriesDropdown from "../../../UI/Popper/Industries/Industries";
import AboutDropdown from "../../../UI/Popper/About/About";

function NavList(props) {
  const { t } = useTranslation();
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
        {t("mainMenu").map(({ link, name }, index) => (
          <NavigationLink link={`/${link}`} key={index}  CTXT={props.ColorTXT}>
            {name}
          </NavigationLink>
        ))}
      </ul>
    </div>
  );
}

export default NavList;
