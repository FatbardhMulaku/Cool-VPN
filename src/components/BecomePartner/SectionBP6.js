import React from "react";
import LayoutGrid from "../Shared/LayoutGrid";
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

function SectionBP6() {
  const classes = useStyles();
  const email = <HiOutlineMail className={classes.icon} />;
  const username = <IoMdPerson className={classes.icon} />;
  const phone = <FiPhone className={classes.icon} />;
  const company = <FaRegBuilding className={classes.icon} />;
  return (
    <LayoutGrid section="SectionBP6">
      <div className="col-sm-12 col-lg-6">
        <div className="SectionBP6__form">
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

export default SectionBP6;
