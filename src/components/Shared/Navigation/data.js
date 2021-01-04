import React from "react";
import { FormattedMessage } from "react-intl";

export const mainMenu = [
  {
    link: "support",
    name: <FormattedMessage id="Nav.mainMenu1" defaultMessage="Support" />,
  },
  {
    link: "blog",
    name: <FormattedMessage id="Nav.mainMenu2" defaultMessage="blog" />,
  },
  {
    link: "features",
    name: <FormattedMessage id="Nav.mainMenu3" defaultMessage="Features" />,
  },
  {
    link: "pricing",
    name: <FormattedMessage id="Nav.mainMenu4" defaultMessage="Pricing" />,
  },
];
