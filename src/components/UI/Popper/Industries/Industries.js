import React from "react";
import PopperBox from "../PopperBox";
import { useTranslation } from "react-i18next";
import { paramCase } from "change-case";
import { Link } from "react-router-dom";

const Industries = (props) => {
  const { t } = useTranslation();

  return (
    <PopperBox
      name={t("whatIsVPN.name")}
      trigger={props.trigger}
      width="570px"
      className="DesctopFull_pannel"
    >
      <div className="industries_popper_container row justify-content-start">
        <div>
          <h6 className="col_black font-roboto">
            {t("whatIsVPN.ItemName1")}
          </h6>
          <ul className="industries_popper_info">
            {t("whatIsVPN.ItemMenu1").map((item, index) => (
              <li key={index}>
                <Link to={`/${paramCase(item.link)}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h6 className="col_black font-roboto">
            {t("whatIsVPN.ItemName2")}
          </h6>
          <ul className="industries_popper_info">
            {t("whatIsVPN.ItemMenu2").map((item, index) => (
              <li key={index}>
                <Link to={`/${paramCase(item.link)}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PopperBox>
  );
};

export default Industries;
