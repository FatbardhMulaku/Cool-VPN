import React from "react";
import { FormattedMessage } from "react-intl";

export const whatIsVPN = [
  {
    title: "Benefits",
    items: [
      {
        link: "browse-anonymously",
        name: (
          <FormattedMessage
            id="Nav.whatIsVPN1"
            defaultMessage="Browse Anonymously"
          />
        ),
      },
      {
        link: "unblock-websites",
        name: (
          <FormattedMessage
            id="Nav.mainMenu2a"
            defaultMessage="Unblock Websites"
          />
        ),
      },
      {
        link: "unlimited-streaming",
        name: (
          <FormattedMessage
            id="Nav.mainMenu3b"
            defaultMessage="Unlimited Streaming"
          />
        ),
      },
      {
        link: "hide-your-ip",
        name: (
          <FormattedMessage id="Nav.mainMenu4c" defaultMessage="Hide Your IP" />
        ),
      },
    ],
  },
  {
    title: "Features",
    items: [
      {
        link: "our-network",
        name: (
          <FormattedMessage
            id="Nav.mainMenu5"
            defaultMessage="160 VPN Locations"
          />
        ),
      },
      {
        link: "browser-extension-safari",
        name: (
          <FormattedMessage
            id="Nav.mainMenu6"
            defaultMessage="VPN Speed Test"
          />
        ),
      },
      {
        link: "public-wifi-security",
        name: (
          <FormattedMessage id="Nav.mainMenu7" defaultMessage="Kill Switch" />
        ),
      },
      {
        link: "an-anonymous-ip-address",
        name: (
          <FormattedMessage
            id="Nav.mainMenu8"
            defaultMessage="Split Tunneling"
          />
        ),
      },
      {
        link: "un-recommendation-encryption",
        name: (
          <FormattedMessage
            id="Nav.mainMenu9"
            defaultMessage="Best-in-Class Encryption"
          />
        ),
      },
      {
        link: "companies-we-support",
        name: (
          <FormattedMessage
            id="Nav.mainMenu10"
            defaultMessage="Trusted Server Technology"
          />
        ),
      },
      {
        link: "imprint-contact",
        name: (
          <FormattedMessage
            id="Nav.mainMenu11"
            defaultMessage="Zero-Knowledge DNS"
          />
        ),
      },
      {
        link: "privacy-policy",
        name: (
          <FormattedMessage
            id="Nav.mainMenu12"
            defaultMessage="Privacy Safeguards"
          />
        ),
      },
    ],
  },
];

export const Product = [
  {
    title: "Desktops & Laptops",
    items: [
      {
        link: "/download",
        name: <FormattedMessage id="Nav.Product1" defaultMessage="Windows" />,
      },
      {
        link: "/download",
        name: <FormattedMessage id="Nav.Product2" defaultMessage="MacOS" />,
      },
      {
        link: "/download",
        name: <FormattedMessage id="Nav.Product3" defaultMessage="Linux" />,
      },
    ],
  },
  {
    title: "Simartphones & Tablets",
    items: [
      {
        link: "/download",
        name: <FormattedMessage id="Nav.Product4" defaultMessage="iOS" />,
      },
      {
        link: "/download",
        name: <FormattedMessage id="Nav.Product5" defaultMessage="Android" />,
      },
    ],
  },
  {
    title: "Home & Office Networking",
    items: [
      {
        link: "vpn-setup-fedora",
        name: <FormattedMessage id="Nav.Product6" defaultMessage="Router" />,
      },
    ],
  },
  {
    title: "Browser Extensions",
    items: [
      {
        link: "/download",
        name: <FormattedMessage id="Nav.Product7" defaultMessage="Chrome" />,
      },
      {
        link: "/download",
        name: <FormattedMessage id="Nav.Product8" defaultMessage="Firefox" />,
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        link: "hide-my-location",
        name: (
          <FormattedMessage id="Nav.Product9" defaultMessage="What is my IP?" />
        ),
      },
      {
        link: "wifi-krack",
        name: (
          <FormattedMessage id="Nav.Product10" defaultMessage="DNS leak Test" />
        ),
      },
      {
        link: "prevent-data-theft",
        name: (
          <FormattedMessage
            id="Nav.Product11"
            defaultMessage="WebRTC Leak Test"
          />
        ),
      },
      {
        link: "our-network",
        name: (
          <FormattedMessage
            id="Nav.Product12"
            defaultMessage="Password Generator"
          />
        ),
      },
    ],
  },
];
