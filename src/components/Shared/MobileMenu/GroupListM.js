import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./MobileMenu.css";
import { paramCase } from "change-case";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  subpanel: {
    backgroundColor: "#fff",
    color: "black",
  },
  subtitle: {
    fontWeight: "Bold",
    marginLeft: "2px",
  },
}));

function GroupListM(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.subpanel}>
      <h6 className={`${classes.subtitle} col_black font-roboto`}>
        <FormattedMessage
          id={`Nav.ItemNameMt${props.id + 1}`}
          defaultMessage={props.title}
        />
      </h6>
      <ul className="industries_popper_info">
        {props.list.map((item, index) => (
          <li key={index}>
            <Link to={`/${paramCase(item.link)}`} onClick={props.drawerToggle}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GroupListM;
