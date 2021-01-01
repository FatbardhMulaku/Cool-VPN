import React from "react";
import { FormattedMessage } from "react-intl";

export const TOPICS = [
  {
    title: (
      <FormattedMessage id="Api.section_2.title1" defaultMessage="TOPICS" />
    ),
  },
  {
    title: (
      <FormattedMessage
        id="Api.section_2.title2"
        defaultMessage="Introduction"
      />
    ),
  },
  {
    title: (
      <FormattedMessage
        id="Api.section_2.title3"
        defaultMessage="Authentication"
      />
    ),
  },
  {
    title: (
      <FormattedMessage id="Api.section_2.title4" defaultMessage="Errors" />
    ),
  },
  {
    title: (
      <FormattedMessage
        id="Api.section_2.title5"
        defaultMessage="Expanding Objects"
      />
    ),
  },
  {
    title: (
      <FormattedMessage
        id="Api.section_2.title6"
        defaultMessage="Idempotent Requests"
      />
    ),
  },
  {
    title: (
      <FormattedMessage id="Api.section_2.title7" defaultMessage="Metadata" />
    ),
  },
  {
    title: (
      <FormattedMessage id="Api.section_2.title8" defaultMessage="Pagination" />
    ),
  },
  {
    title: (
      <FormattedMessage
        id="Api.section_2.title9"
        defaultMessage="Request IDs"
      />
    ),
  },
  {
    title: (
      <FormattedMessage
        id="Api.section_2.title10"
        defaultMessage="Versioning"
      />
    ),
  },
];

export const RESOURCES = [
  {
    title: (
      <FormattedMessage
        id="Api.section_2.title1a"
        defaultMessage="CORE RESOURCES"
      />
    ),
  },
  {
    title: (
      <FormattedMessage id="Api.section_2.title2a" defaultMessage="Balance" />
    ),
  },
  {
    title: (
      <FormattedMessage id="Api.section_2.title3a" defaultMessage="Charges" />
    ),
  },
  {
    title: (
      <FormattedMessage
        id="Api.section_2.title4a"
        defaultMessage="CheckoutSessions"
      />
    ),
  },
  {
    title: (
      <FormattedMessage id="Api.section_2.title5a" defaultMessage="Customers" />
    ),
  },
  {
    title: (
      <FormattedMessage id="Api.section_2.title6a" defaultMessage="Disputes" />
    ),
  },
  {
    title: (
      <FormattedMessage id="Api.section_2.title7a" defaultMessage="Events" />
    ),
  },
  {
    title: (
      <FormattedMessage id="Api.section_2.title8a" defaultMessage="Files" />
    ),
  },
  {
    title: (
      <FormattedMessage
        id="Api.section_2.title9a"
        defaultMessage="File Links"
      />
    ),
  },
  {
    title: (
      <FormattedMessage
        id="Api.section_2.title10a"
        defaultMessage="PaymentIntents"
      />
    ),
  },
  {
    title: (
      <FormattedMessage id="Api.section_2.title11a" defaultMessage="Payouts" />
    ),
  },
  {
    title: (
      <FormattedMessage id="Api.section_2.title12a" defaultMessage="Products" />
    ),
  },
  {
    title: (
      <FormattedMessage id="Api.section_2.title13a" defaultMessage="Refunds" />
    ),
  },
];

export const PAYMENT = [
  {
    title: (
      <FormattedMessage
        id="Api.section_2.title1b"
        defaultMessage="PAYMENT METHODS"
      />
    ),
  },
  {
    title: (
      <FormattedMessage
        id="Api.section_2.title2b"
        defaultMessage="Bank Accounts"
      />
    ),
  },
  {
    title: (
      <FormattedMessage id="Api.section_2.title3b" defaultMessage="Cards" />
    ),
  },
  {
    title: (
      <FormattedMessage id="Api.section_2.title4b" defaultMessage="Sources" />
    ),
  },
];

export const BILLING = [
  {
    title: (
      <FormattedMessage id="Api.section_2.title1c" defaultMessage="BILLING	" />
    ),
  },
  {
    title: (
      <FormattedMessage id="Api.section_2.title2c" defaultMessage="Coupons" />
    ),
  },
  {
    title: (
      <FormattedMessage id="Api.section_2.title3c" defaultMessage="Discounts" />
    ),
  },
  {
    title: (
      <FormattedMessage id="Api.section_2.title4c" defaultMessage="Invoices" />
    ),
  },
  {
    title: (
      <FormattedMessage
        id="Api.section_2.title5c"
        defaultMessage="Invoice Items"
      />
    ),
  },
  {
    title: (
      <FormattedMessage id="Api.section_2.title6c" defaultMessage="Products" />
    ),
  },
  {
    title: (
      <FormattedMessage id="Api.section_2.title7c" defaultMessage="Plans" />
    ),
  },
  {
    title: (
      <FormattedMessage
        id="Api.section_2.title8c"
        defaultMessage="Subscriptions"
      />
    ),
  },
  {
    title: (
      <FormattedMessage
        id="Api.section_2.title9c"
        defaultMessage="Subscription Items"
      />
    ),
  },
  {
    title: (
      <FormattedMessage
        id="Api.section_2.title10c"
        defaultMessage="Usage Records"
      />
    ),
  },
];

export const Reference = [
  {
    desc: (
      <FormattedMessage
        id="Api.section_2.desc1"
        defaultMessage="API Reference"
      />
    ),
  },
  {
    desc: (
      <FormattedMessage
        id="Api.section_2.desc2"
        defaultMessage="The Stripe API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-
				encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, 
				authentication, and verbs.
				"
      />
    ),
  },
  {
    desc: (
      <FormattedMessage
        id="Api.section_2.desc3"
        defaultMessage="You can use the Stripe API in test mode, which does not affect your live data or interact with the banking 
				networks. The API key you use to authenticate the request determines whether the request is live mode or 
				test mode.
				"
      />
    ),
  },
  {
    desc: (
      <FormattedMessage
        id="Api.section_2.desc4"
        defaultMessage="Subscribe to API announce mailing list for updates.
				"
      />
    ),
  },
  {
    desc: (
      <FormattedMessage
        id="Api.section_2.desc5"
        defaultMessage="Was this section helpful? Yes No	"
      />
    ),
  },
  {
    desc: (
      <FormattedMessage
        id="Api.section_2.desc6"
        defaultMessage="SAPI libraries

				"
      />
    ),
  },
  {
    desc: (
      <FormattedMessage
        id="Api.section_2.desc7"
        defaultMessage="Official libraries for the Stripe API are available in several languages. Community-supported libraries are 

				"
      />
    ),
  },
  {
    desc: (
      <FormattedMessage
        id="Api.section_2.desc8"
        defaultMessage="also available for additional languages.

				"
      />
    ),
  },
];

export const Authentication = [
  {
    desc: (
      <FormattedMessage
        id="Api.section_2.desc1b"
        defaultMessage="Authentication"
      />
    ),
  },
  {
    desc: (
      <FormattedMessage
        id="Api.section_2.desc2b"
        defaultMessage="TThe Stripe API uses API keys to authenticate requests. You can view and manage your API keys in the Stripe 
				Dashboard.
				"
      />
    ),
  },
  {
    desc: (
      <FormattedMessage
        id="Api.section_2.desc3b"
        defaultMessage="Test mode secret keys have the prefix sk_test_ and live mode secret keys have the prefix sk_live_. 
				Alternatively, you can use restricted API keys for granular permissions.
				"
      />
    ),
  },
  {
    desc: (
      <FormattedMessage
        id="Api.section_2.desc4b"
        defaultMessage="Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in 
				publicly accessible areas such as GitHub, client-side code, and so forth.
				"
      />
    ),
  },
  {
    desc: (
      <FormattedMessage
        id="Api.section_2.desc5b"
        defaultMessage="Authentication to the API is performed via HTTP Basic Auth. Provide your API key as the basic auth 
				username value. You do not need to provide a password."
      />
    ),
  },
  {
    desc: (
      <FormattedMessage
        id="Api.section_2.desc6b"
        defaultMessage="If you need to authenticate via bearer auth (e.g., for a cross-origin request), use -H `Authorization: Bearer 
				sk_test_4eC39HqLyjWDarjtT1zdp7dc` instead of -u sk_test_4eC39HqLyjWDarjtT1zdp7dc.
				"
      />
    ),
  },
  {
    desc: (
      <FormattedMessage
        id="Api.section_2.desc7b"
        defaultMessage="All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without 
				authentication will also fail.
				"
      />
    ),
  },
  {
    desc: (
      <FormattedMessage
        id="Api.section_2.desc8b"
        defaultMessage="Was this section helpful?YesNo 
				curl https://api.stripe.com/v1/charges \ 
				  -u sk_test_4eC39HqLyjWDarjtT1zdp7dc: 
				# The colon prevents curl from asking for a password. 
				A sample test API key is included in all the examples here, so you can test any example right away. To test  
				requests using your account, replace the sample API key with your actual API key. 
				"
      />
    ),
  },
];

export const Errors = [
  {
    desc: (
      <FormattedMessage id="Api.section_2.desc1c" defaultMessage="Errors" />
    ),
  },
  {
    desc: (
      <FormattedMessage
        id="Api.section_2.desc2c"
        defaultMessage="Stripe uses conventional HTTP response codes to indicate the success or failure of an API request. In 
				general: Codes in the 2xx range indicate success. Codes in the 4xx range indicate an error that failed given 
				the information provided (e.g., a required parameter was omitted, a charge failed, etc.). Codes in the 5xx 
				range indicate an error with Stripe's servers (these are rare).
				"
      />
    ),
  },
  {
    desc: (
      <FormattedMessage
        id="Api.section_2.desc3c"
        defaultMessage="Some 4xx errors that could be handled programmatically (e.g., a card is declined) include an error code 
				that briefly explains the error reported."
      />
    ),
  },
  {
    desc: (
      <FormattedMessage
        id="Api.section_2.desc4c"
        defaultMessage="Was this section helpful?YesNo"
      />
    ),
  },
  {
    desc: (
      <FormattedMessage id="Api.section_2.desc5c" defaultMessage="ATTRIBUTES" />
    ),
  },
  {
    desc: (
      <FormattedMessage
        id="Api.section_2.desc6c"
        defaultMessage="type
				string
				The type of error returned. One of api_connection_error, api_error, authentication_error, card_error, 
				idempotency_error, invalid_request_error, or rate_limit_error
				"
      />
    ),
  },
  {
    desc: (
      <FormattedMessage
        id="Api.section_2.desc7b"
        defaultMessage="All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without 
				authentication will also fail.
				"
      />
    ),
  },
  {
    desc: (
      <FormattedMessage
        id="Api.section_2.desc8b"
        defaultMessage="Was this section helpful?YesNo  
				curl https://api.stripe.com/v1/charges \  
				  -u sk_test_4eC39HqLyjWDarjtT1zdp7dc:  
				# The colon prevents curl from asking for a password.  
				A sample test API key is included in all the examples here, so you can test any example right away. To test   
				requests using your account, replace the sample API key with your actual API key.  
				"
      />
    ),
  },
  {
    desc: (
      <FormattedMessage
        id="Api.section_2.desc9c"
        defaultMessage="/ charge 
				string 
				For card errors, the ID of the failed charge.  
				"
      />
    ),
  },
  {
    desc: (
      <FormattedMessage
        id="Api.section_2.desc10c"
        defaultMessage="/ code 
				string 
				For some errors that could be handled programmatically, a short string indicating the error code reported. 
				"
      />
    ),
  },
  {
    desc: (
      <FormattedMessage
        id="Api.section_2.desc11c"
        defaultMessage="/ decline_code 
				string 
				For card errors resulting from a card issuer decline, a short string indicating the card issuer’s reason for the  
				decline if they provide one. 
				"
      />
    ),
  },
  {
    desc: (
      <FormattedMessage
        id="Api.section_2.desc12c"
        defaultMessage="/ doc_url 
				string 
				A URL to more information about the error code reported. 
				"
      />
    ),
  },
];
