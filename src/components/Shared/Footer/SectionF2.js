import React from "react";
import Logo from "./../../UI/Logo/Logo";
import { FormattedMessage } from "react-intl";
import { FaCopyright, FaMobileAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import MenuListFooter from "./MenuList";
import { Link } from "react-router-dom";
import LangOptions from "../../UI/LangOptions";
import Fade from "react-reveal/Fade";
import { FooterLinks } from "./data";

function SectionF2() {
  const SocialLinks = [
    "https://www.facebook.com",
    "https://www.instagram.com/",
    "https://www.linkedin.com",
    "https://www.youtube.com",
  ];

  return (
    <div className="container-fluid footer_content SectionF2">
      <div className="row justify-content-between">
        {FooterLinks.map((item, index) => (
          <MenuListFooter key={index} title={item.title} list={item.items} />
        ))}

        <div className="col-sm-12 col-md-6 col-lg-2 footer-logo">
          <Logo logo="white_logo" text="col_white" />

          <ul className="footer-list ">
            <li>
              <AiOutlineMail color="white" />
              <a className="text-lowercase" href="mailto: info@Coolvpn.com">
                {" "}
                info@Coolvpn.com
              </a>
            </li>
            <li>
              <FaMobileAlt color="white" />
              <a href="tel:+38345400400"> +383 45 400 400</a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://goo.gl/maps/gWGFJN2rzNrBZ5FX7"
              >
                {" "}
                <FormattedMessage
                  id="footer.location"
                  defaultMessage="4544 Hardman Road, South Burlington, VT 05403"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="footer_socialMedia">
			<h2 className="text-white footer-list-text text-capitalize">
				Follow us
			</h2>
			<SocialMedia />
			</div> */}
      <div className="row mt-5">
        <div className="footer-bottom text-white col-sm-12 col-lg-8">
          <h6 className="alRight align-items-center">
            <i>
              <FaCopyright />
            </i>
            <FormattedMessage
              id="footer.alRight"
              defaultMessage="2019 CoolVPN.com. All rights reserved"
            />
          </h6>
          <div className="footer-terms">
            |<Link to="Privacy"> Privacy Policy </Link> |{" "}
            <Link to="security-vulnerability"> Security Vulnerability</Link> | 
          </div>
         
        </div>

        <Fade top big cascade>
          <div className="social__icons col-sm-12 col-lg-4">
          <LangOptions />
            {SocialLinks.map((item, index) => {
              return (
                <a key={index} target="_blank" rel="noreferrer" href={item}>
                  <div className={`social_icon${index + 1} bg`} />
                </a>
              );
            })}
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default SectionF2;
