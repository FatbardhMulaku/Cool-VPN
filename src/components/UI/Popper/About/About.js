import React from "react";
import PopperBox from "../PopperBox";
import { useTranslation } from "react-i18next";
import { paramCase } from "change-case";
import { Link } from "react-router-dom";

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
      <div>
          <h6 className="col_black font-roboto">
            {t("Product.ItemName1")}
          </h6>
          <ul className="industries_popper_info">
            {t("Product.ItemMenu1").map((item, index) => (
              <li key={index}>
                <Link to={`/${paramCase(item.link)}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
      </div> 
      <div>
          <h6 className="col_black font-roboto">
            {t("Product.ItemName2")}
          </h6>
          <ul className="industries_popper_info">
            {t("Product.ItemMenu2").map((item, index) => (
              <li key={index}>
                <Link to={`/${paramCase(item.link)}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
      </div> 
      <div>
          <h6 className="col_black font-roboto">
            {t("Product.ItemName3")}
          </h6>
          <ul className="industries_popper_info">
            {t("Product.ItemMenu3").map((item, index) => (
              <li key={index}>
                <Link to={`/${paramCase(item.link)}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
      </div> 
      <div>
          <h6 className="col_black font-roboto">
            {t("Product.ItemName4")}
          </h6>
          <ul className="industries_popper_info">
            {t("Product.ItemMenu4").map((item, index) => (
              <li key={index}>
                <Link to={`/${paramCase(item.link)}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
      </div> 
      <div>
          <h6 className="col_black font-roboto">
            {t("Product.ItemName5")}
          </h6>
          <ul className="industries_popper_info">
            {t("Product.ItemMenu5").map((item, index) => (
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

export default About;
