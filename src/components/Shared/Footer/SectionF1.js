import React from "react";
import LayoutGrid from "../LayoutGrid";
import { FormattedMessage, useIntl } from "react-intl";

function SectionF1() {
  const intl = useIntl();
  const Placeholder = intl.formatMessage({
    id: "footer.Placeholder",
    defaultMessage: "Enter your email address",
  });
  return (
    <LayoutGrid section="SectionF1" row="justify-content-around">
      <div className="subscribe_container">
        <h3 className="col_white font-helvetica">
          <FormattedMessage
            id="footer.subscribe.title"
            defaultMessage="Join over 30k users, who use our service"
          />
        </h3>
        <form className="subscribe justify-content-center">
          <input type="email" placeholder={Placeholder} required />
          <button type="submit">
            <FormattedMessage
              id="footer.subscribe.name"
              defaultMessage="subscribe"
            />
          </button>
        </form>
      </div>
      <div className="download__imgF1">
        <h6>
          <FormattedMessage
            id="footer.subscribe.download"
            defaultMessage="Download CoolVPN"
          />
        </h6>
        <div className="store_img">
          <div className="store_boxF1">
            <div className="app_store_img bg m-auto" />
            <div className="store_box-txt">
              <p>
                <FormattedMessage
                  id="footer.subscribe.appStore"
                  defaultMessage="Download on the"
                />
              </p>
              <h6>App Store</h6>
            </div>
          </div>
          <div className="store_boxF1">
            <div className="Google_play_img bg m-auto" />
            <div className="store_box-txt">
              <p>
                <FormattedMessage
                  id="footer.subscribe.googlePlay"
                  defaultMessage="Get it on"
                />
              </p>
              <h6>Google Play</h6>
            </div>
          </div>
        </div>
      </div>
    </LayoutGrid>
  );
}

export default SectionF1;
