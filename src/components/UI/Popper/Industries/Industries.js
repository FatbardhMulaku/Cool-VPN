import React from "react";
import PopperBox from "../PopperBox";
import { useTranslation } from "react-i18next";
import GroupList from "../GroupList";
import { whatIsVPN } from "../data";

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
        {whatIsVPN.map((item, index) => (
          <GroupList key={index} title={item.title} list={item.items} />
        ))}
      </div>
    </PopperBox>
  );
};

export default Industries;
