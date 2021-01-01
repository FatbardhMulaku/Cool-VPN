import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextInfo from "../Shared/Text/TextInfoNew";
import ButtonIcon from "../UI/Button/ButtonIcon";
import Buttoni from "./../UI/Button/ButtonNew";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { CardBtn, Pricing, Item1, Item2, Item3 } from "./data";

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

function SectionPr1(props) {
  const classes = useStyles(props);

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
    <div className="SectionPr1 bg">
      <div className="container">
        <Fade left>
          <TextInfo
            txt="Pricing.section_1"
            textAlign="left"
            color="white"
            margin="0px"
            klasa="SectionPr1__info"
            DfTitle="Get CoolVPN in 3 simple steps"
            DfDesc="No logs, no hidden fees. All plans come with the 30-day money-back guarantee. Discover Cool VPN Teams for business."
          />
        </Fade>
        <Fade top big>
          <div className="row mt-4 mb-4">
            <ButtonIcon
              linkBtn="SectionPr2"
              icon="SectionPr1__img1 bg"
              offsetBtn={-150}
              txt="Pricing.section_1.btn1"
              BGcolor="#8878BF"
              color="#fff"
              margin="10px"
              HoverBGcolor="#8878BF"
              HoverColor="white"
              border="1px solid #8878BF"
              DfBtn="Pick your plan"
              HoverBorder="1px solid white"
            />

            {CardBtn.map(({ btn }, index) => (
              <ButtonIcon
                key={index}
                link="/checkout"
                icon={`SectionPr1__img${index + 2} bg`}
                offsetBtn={-150}
                txt={`Pricing.section_1.btn${index + 2}`}
                BGcolor="rgba(199, 199, 199, 0.5)"
                color="#fff"
                margin="10px"
                HoverBGcolor="rgba(199, 199, 199, 0.5)"
                HoverColor="white"
                border="1px solid transparent"
                HoverBorder="1px solid white"
                DfBtn={btn}
              />
            ))}
          </div>
        </Fade>
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
        <Zoom>
          {" "}
          <div className="SectionPr1__img bg" />
        </Zoom>
      </div>
    </div>
  );
}

export default SectionPr1;
