import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LayoutContainer from "../Shared/LayoutContainer";
import Textinfo from "../Shared/Text/TextInfoNew";
import Slide from "react-reveal/Slide";
import { Data, TextList1, TextList2 } from "./data";

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
}));

function SectionH6() {
  const classes = useStyles();

  const data1 = (
    <div>
      {TextList1.map(({ text }, index) => (
        <div key={index} className={`${classes.root}`}>
          <div className={`bg ${classes.img} SectionH6__icon1`}></div>
          <p className={classes.txt}>{text}</p>
        </div>
      ))}
    </div>
  );

  const data2 = (
    <div>
      {TextList2.map(({ text }, index) => (
        <div key={index} className={`${classes.root} `}>
          <div className={`bg ${classes.img} SectionH6__icon2`}></div>
          <p className={classes.txt}>{text}</p>
        </div>
      ))}
    </div>
  );

  const content = [data1, data2];
  return (
    <LayoutContainer section="SectionH6">
      <Textinfo
        txt="Home.section_6"
        textAlign="center"
        color="black"
        margin="20px 0"
        DfTitle="Why choose VPN?"
        DfDesc="VPN works like a bullet-proof sedan, allowing you to cross the busy streets of urban internet with ease, comfort, and security."
      />
      <Slide bottom cascade>
        <div className="row justify-content-center">
          {Data.map(({ title, desc }, index) => (
            <div key={index + 1} className="SectionH6__box">
              <p className={`subH6${index + 1}`}>{desc}</p>
              <div className="SectionH6__line mb-4">
                <div className={`SectionH4__icon--title${index + 1} bg`} />
                <h4>{title}</h4>
              </div>
              {content[index]}
              {/* <ListItem txt={`Home.section_6.items${index+1}`} icon={`SectionH6__icon${index+1}`}/> */}
            </div>
          ))}
        </div>
      </Slide>
    </LayoutContainer>
  );
}
export default SectionH6;
