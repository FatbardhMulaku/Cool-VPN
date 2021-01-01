import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormattedMessage } from "react-intl";
import Textinfo from "./../Shared/Text/TextInfoNew";
import Buttoni from "./../UI/Button/ButtonNew";
import Zoom from "react-reveal/Zoom";
import { Pricing, Item1, Item2, Item3 } from "../Pricing/data";

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

function SectionH4() {
  const classes = useStyles();

  const data1 = (
    <div>
      {Item1.map(({ titleDesc }, index) => (
        <div key={index} className={`${classes.root}`}>
          <div
            className={`bg ${classes.img} SectionH4__icon${index + 1}`}
          ></div>
          <p className={classes.txt}>{titleDesc}</p>
        </div>
      ))}
    </div>
  );

  const data2 = (
    <div>
      {Item2.map(({ titleDesc }, index) => (
        <div key={index} className={`${classes.root} `}>
          <div
            className={`bg ${classes.img} SectionH4__icon${index + 1}`}
          ></div>
          <p className={classes.txt}>{titleDesc}</p>
        </div>
      ))}
    </div>
  );

  const data3 = (
    <div>
      {Item3.map(({ titleDesc }, index) => (
        <div key={index} className={`${classes.root} `}>
          <div
            className={`bg ${classes.img} SectionH4__icon${index + 1}`}
          ></div>
          <p className={classes.txt}>{titleDesc}</p>
        </div>
      ))}
    </div>
  );
  const content = [data1, data2, data3];
  return (
    <div className="SectionH4 container">
      <Textinfo
        txt="Home.section_4"
        textAlign="center"
        color="black"
        margin="20px 0"
        DfTitle="Pricing"
        DfDesc="No logs, no hidden fees. All plans come with the 30-day money-back guarantee. Discover Cool VPN Teams for business."
      />
      <h2>
        <FormattedMessage
          id="Home.section_4.subtitle"
          defaultMessage="The best deal of the year!"
        />
      </h2>
      <Zoom cascade>
        <div className="row justify-content-center">
          {Pricing.map(({ title, price, btnTxt, save }, index) => (
            <div key={index} className="SectionH4__box">
              <h4>{title}</h4>
              {content[index]}
              <h2>{price}</h2>
              <Buttoni
                link="/checkout"
                offsetBtn={-150}
                txt={`Pricing.section_1.btn.id${index + 1}`}
                BGcolor="#2D2E2D"
                color="#fff"
                HoverBGcolor="transparent"
                HoverColor="#2D2E2D"
                border="1px solid black"
                DfBtn={btnTxt}
                HoverBorder="1px solid #2D2E2D"
              />
              <p>{save}</p>
            </div>
          ))}
        </div>
      </Zoom>
    </div>
  );
}

export default SectionH4;
