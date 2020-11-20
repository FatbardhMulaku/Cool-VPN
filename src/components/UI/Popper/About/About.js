import React from "react";
import PopperBox from "../PopperBox";
import PopperItem from "../PopperItem";
import { useTranslation } from "react-i18next";
import "./About.css";
import "../index.css";
import { paramCase } from "change-case";

const About = (props) => {
  const { t } = useTranslation();
  return (
    <PopperBox
      name={t("aboutPopper.name")}
      trigger={props.trigger}
      width="500px"
    >
      <div className="about_popper_container">
        <ul className="about_popper_list">
          {t("aboutPopper.aboutMenu").map((item, index) => (
            <PopperItem
              key={index}
              link={paramCase(item.link)}
              name={item.name}
              icon={`about_popper_icon${index + 1}`}
            />
          ))}
        </ul>
      </div>
    </PopperBox>
  );
};

export default About;
