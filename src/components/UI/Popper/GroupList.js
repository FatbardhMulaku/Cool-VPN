import React from "react";
import { paramCase } from "change-case";
import { Link } from "react-router-dom";

function GroupList(props) {
  return (
    <div>
      <h6 className="col_black font-roboto">
        {props.title}
      </h6>
      <ul className="industries_popper_infoDesktop">
        {props.list.map((item, index) => (
          <li key={index}>
            <Link to={`/${paramCase(item.link)}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default GroupList;
