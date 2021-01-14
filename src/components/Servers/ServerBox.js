import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BoxTitles, Item1, Item2, Item3, Item4 } from "./data";
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "8px 0",
    [theme.breakpoints.down("sm")]: {
      /* padding:(props) => props.Smallpadding, */
    },
  },
  img: {
    marginRight: "15px",
  },
  txt: {
    margin: "0px",
  },
  title: {
    textAlign: (props) => props.textAlign,
    color: "#000 !important",
    marginBottom: "15px",
    [theme.breakpoints.down("sm")]: {
      /* padding:(props) => props.Smallpadding, */
      textAlign: "center",
      fontSize: "18px",
    },
  },
  box: {
    backgroundColor: (props) => props.BoxBgGcolor,
    border: (props) => props.BoxBorder,
    color: (props) => props.BoxColor,
  },
}));

function ServerBox(props) {
  const classes = useStyles(props);

  const data1 = (
    <div>
      {Item1.map(({ txt }, index) => (
        <div key={index} className={`${classes.root}`}>
          <div className={`${props.icon} bg ${classes.img}`}></div>
          <p className={classes.txt}>{txt}</p>
        </div>
      ))}
    </div>
  );
  const data2 = (
    <div>
      {Item2.map(({ txt }, index) => (
        <div key={index} className={`${classes.root}`}>
          <div className={`${props.icon} bg ${classes.img}`}></div>
          <p className={classes.txt}>{txt}</p>
        </div>
      ))}
    </div>
  );
  const data3 = (
    <div>
      {Item3.map(({ txt }, index) => (
        <div key={index} className={`${classes.root}`}>
          <div className={`${props.icon} bg ${classes.img}`}></div>
          <p className={classes.txt}>{txt}</p>
        </div>
      ))}
    </div>
  );
  const data4 = (
    <div>
      {Item4.map(({ txt }, index) => (
        <div key={index} className={`${classes.root}`}>
          <div className={`${props.icon} bg ${classes.img}`}></div>
          <p className={classes.txt}>{txt}</p>
        </div>
      ))}
    </div>
  );
  const content = [data1, data2, data3, data4];

  const subTitles = [
    "America · 2430 servers",
    "Europe · 2151 servers",
    "Asia Pacific · 702 servers",
    "Africa, the Middle East and India · 122 servers",
  ];

  return (
    <Fade bottom cascade>
    <div className="SectionSv2">
      <h4 className={classes.title}>{subTitles[props.NrBox]}</h4>
      <div className="row">
        <div className={`${classes.box1} ${props.box1}`}></div>
        {/* SectionSv2__box1 */}
        <div className={`${classes.box} ${props.box}`}>
          {" "}
          {/* SectionSv2__box */}
          {BoxTitles.map(({ title }, index) => (
            <div key={index + 1} className="SectionSv2__box--list">
              <div>
                <div>
                  <h5>{title}</h5>
                  <div className={`SectionSv2__iconCountry${index + 1}`} />
                  <div className={`${props.arrowIcon} bg`} />
                </div>
                <p>1885 servers</p>
              </div>

              {content[index]}

              {/* <ListItem
                  txt={`Servers.section_2.items${index + 1}`}
                  icon={props.listIcon}
                /> */}
            </div>
          ))}
        </div>
        <div className={`${classes.box1} ${props.box2}`}></div>
      </div>
    </div>
    </Fade>
  );
}

export default ServerBox;
