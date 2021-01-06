import React from "react";
import PopperBox from "../PopperBox";
import GroupList from "../GroupList";
import { whatIsVPN, DropDown1 } from "../data";

const Industries = (props) => {
  return (
    <PopperBox
      name={DropDown1}
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
