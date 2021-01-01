import { FormattedMessage } from "react-intl";
import LayoutContainer from "../Shared/LayoutContainer";
import { DownloadItem } from "./data";
function SectionPA8() {
  return (
    <LayoutContainer section="SectionPA8">
      <h3>
        <FormattedMessage
          id="PressArea.section_8.title"
          defaultMessage="Latest press releases from CoolVPN"
        />
      </h3>
      <div className="row">
        {DownloadItem.map(({ title }, idx) => (
          <div key={idx} className="col-sm-12 col-lg-6 SectionPA8__box">
            <div className="row mx-auto">
              <div className="col-3 col-md-2">
                <div className="SectionPA8__box--img bg" />
              </div>
              <p className="col-11 col-md-7 my-auto">{title}</p>
              <h6 className="col-3">
                <FormattedMessage
                  id="PressArea.section_8.download"
                  defaultMessage="Download"
                />
              </h6>
            </div>
          </div>
        ))}
      </div>
    </LayoutContainer>
  );
}

export default SectionPA8;
