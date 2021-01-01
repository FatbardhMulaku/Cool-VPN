import React from "react";
import { paramCase } from "change-case";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

function GroupList(props) {
  return (
    <div>
      <h6 className="col_black font-roboto">
        <FormattedMessage
          id={`whatIsVPN.ItemNameDt${props.id + 1}`}
          defaultMessage={props.title}
        />
      </h6>
      <ul className="industries_popper_info">
        {props.list.map((item, index) => (
          <li key={index}>
            <Link to={`/${paramCase(item.link)}`}>
              <FormattedMessage
                id={`whatIsVPN.ItemNameD${props.id + 1}`}
                defaultMessage={item.name}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default GroupList;
