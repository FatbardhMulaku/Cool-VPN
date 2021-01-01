import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
import { FormattedMessage } from "react-intl";
import InputLogin from "../UI/Input/imputLoginWhite";
import { IoMdPerson } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { FaRegBuilding } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import Botton from "../UI/Button/ButtonNew";

const useStyles = makeStyles((theme) => ({
  content: {
    [theme.breakpoints.down("xs")]: {
      padding: "8px 10px ",
    },
  },
  icon: {
    fontSize: "24px",
    color: "#fff",
  },
}));

function SectionBP1() {
  const classes = useStyles();
  const email = <HiOutlineMail className={classes.icon} />;
  const username = <IoMdPerson className={classes.icon} />;
  const phone = <FiPhone className={classes.icon} />;
  const company = <FaRegBuilding className={classes.icon} />;
  return (
    <LayoutGrid section="SectionBP1">
      <div className="col-sm-12 col-lg-6">
        <h3>
          <FormattedMessage
            id="BecomePartner.section_1.title"
            defaultMessage="The easiest way to grow your business – the CoolVPN reseller program"
          />
        </h3>
        <p>
          <FormattedMessage
            id="BecomePartner.section_1.desc1"
            defaultMessage="You start with a 30% discount, which increases with your sales"
          />
        </p>
        <p>
          <FormattedMessage
            id="BecomePartner.section_1.desc2"
            defaultMessage="With 14 million users and growing, CoolVPN is one of the most popular VPN brands in the world. It provides an essential product for users who value their privacy and security. You can become a VPN reseller within a day – it’s all in your hands."
          />
        </p>
      </div>
      <div className="col-sm-12 col-lg-6">
        <div className="SectionBP1__form">
          <div className="row">
            <div className="col-12 col-sm-6 text-white">
              <InputLogin type="text" placeholder="Username" icon={username} />
            </div>
            <div className="col-12 col-sm-6">
              <InputLogin type="email" placeholder="Email" icon={email} />
            </div>
          </div>
          <InputLogin type="number" placeholder="Phone" icon={phone} />
          <InputLogin type="text" placeholder="Company" icon={company} />
          <label className="container_lab">
            <p>Im not a Robot</p> <div className="container_lab--img bg" />
            <input type="checkbox" />
            <span className="checkmark2"></span>
          </label>
          <Botton
            link="/#"
            offsetBtn={-150}
            txt="BecomePartner.section_1.btn"
            BGcolor="rgba(254, 254, 254, 0.709)"
            color="#000"
            margin="10px 0 0 0"
            HoverBGcolor="transparent"
            HoverColor="#fff"
            border="1px solid #fff"
            HoverBorder="1px solid #fff"
            DfBtn="Sign Up"
          />
        </div>
      </div>
    </LayoutGrid>
  );
}

export default SectionBP1;
