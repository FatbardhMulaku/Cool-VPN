import React from "react";
import PopperBox from "../PopperBox";
import { useTranslation } from "react-i18next";
import { Product } from "../data";
import GroupList from "../GroupList";

const About = (props) => {
  const { t } = useTranslation();
  return (
    <PopperBox
      name={t("Product.name")}
      trigger={props.trigger}
      width="570px"
      className="DesctopFull_pannel"
    >
      <div className="industries_popper_container row flex-wrap justify-content-start">
        {Product.map((item, index) => (
          <GroupList key={index} id={index} title={item.title} list={item.items} />
        ))}
      </div>
    </PopperBox>
  );
};

export default About;
