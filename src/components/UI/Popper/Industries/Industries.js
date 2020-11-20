import React from "react";
import PopperBox from "../PopperBox";
import PopperItem from "../PopperItem";
import { useTranslation } from "react-i18next";
import "./Industries.css";
import "../index.css";
import { paramCase } from "change-case";
import { Link } from "react-router-dom";

const Industries = (props) => {
  const { t } = useTranslation();

  return (
    <PopperBox
      name={t("industriesPopper.name")}
      trigger={props.trigger}
      width="1000px"
    >
      <div className="industries_popper_container">
        <ul className="industries_popper_list">
          {t("industriesPopper.industriesMenu").map((item, index) => (
            <PopperItem
              key={index}
              link={item.link}
              name={item.name}
              icon={`industries_popper_icon${index + 1}`}
            />
          ))}
        </ul>
        <div>
          <h6 className="col_black font-roboto">
            {t("industriesPopper.industriesInfoName")}
          </h6>
          <ul className="industries_popper_info">
            {t("industriesPopper.industriesInfoMenu").map((item, index) => (
              <li key={index}>
                <Link to={`/${paramCase(item)}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PopperBox>
  );
};

export default Industries;
