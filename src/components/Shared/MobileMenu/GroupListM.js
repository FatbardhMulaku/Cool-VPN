import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./MobileMenu.css";
import { paramCase } from "change-case";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  subpanel: {
    backgroundColor: "#222222",
    color: "#fff",
  },
  subtitle: {
    fontWeight: "Bold",
    marginLeft: "10px",
    color: "#fff",
    paddingTop:"10px",
    marginBottom:"0px !important",
  },
}));

function GroupListM(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.subpanel}>
      <h6 className={`${classes.subtitle} font-roboto`}>
        {props.title}
      </h6>
      <ul className="industries_popper_infoMobile">
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
