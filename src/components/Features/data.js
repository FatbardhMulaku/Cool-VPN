import React from "react";
import { FormattedMessage } from "react-intl";

export const CardList = [
  {
    title: (
      <FormattedMessage
        id="Features.section_1.title.id1"
        defaultMessage="VPN Server"
      />
    ),
    desc: (
      <FormattedMessage
        id="Features.section_1.desc.id1"
        defaultMessage="Deployed by VPN Provider at different locations"
      />
    ),
  },
  {
    title: (
      <FormattedMessage
        id="Features.section_1.title.id2"
        defaultMessage="VPN Protocols"
      />
    ),
    desc: (
      <FormattedMessage
        id="Features.section_1.desc.id2"
        defaultMessage="To create the Tunnel"
      />
    ),
  },
  {
    title: (
      <FormattedMessage
        id="Features.section_1.title.id3"
        defaultMessage="VPN Encryption"
      />
    ),
    desc: (
      <FormattedMessage
        id="Features.section_1.desc.id3"
        defaultMessage="To Secure the communication by making it unreadable for everyone except the receiver"
      />
    ),
  },
];
