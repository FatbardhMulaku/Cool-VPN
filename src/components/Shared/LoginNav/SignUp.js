import React from 'react';
import { useTranslation } from "react-i18next";
import "./_index.scss";
import { makeStyles } from "@material-ui/core/styles";
import { IoMdPerson } from "react-icons/io";
import ButonIcon  from "../../UI/Button/ButtonIcon";
import InputLogin from "../../UI/Input/InputLogin";
import { IoMdLock } from "react-icons/io";
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
	content: {
	  [theme.breakpoints.down("xs")]: {
		padding: "8px 10px ",
	  },
	},
	icon: {
	  fontSize: "24px",
	  color: "#696869",
	},
  }));

function SignUp() {
	const { t } = useTranslation();
	const classes = useStyles();
	const username = <IoMdPerson className={classes.icon} />;
	const password = <IoMdLock className={classes.icon} />;
	return (
		<div className="Login bg">
			<div className="login_wrapper container">
				<div className="Login__left">
					<h3>{t("Login.title")}</h3>
					<div className="row">
						<ButonIcon linkBtn="SectionPr2" icon="Login__fb bg" offsetBtn={-150} txt="Login.fb"
								BGcolor="#2D2E2D" color="#fff" margin="5px"
								HoverBGcolor="#696869" HoverColor="white"
								border="1px solid #8878BF"
								HoverBorder="1px solid black"/>

						<ButonIcon linkBtn="SectionPr2" icon="Login__apple bg" offsetBtn={-150} txt="Login.apple"
							BGcolor="#fff" color="#fff" margin="5px" width="100%"
							HoverBGcolor="#C2C2C2" HoverColor="white"
							border="1px solid #000"
							HoverBorder="1px solid black"/>
					</div>
					<h2 className="or_divider"> <span>{t("SignUp.or")}</span></h2>
					<InputLogin
						type="text"
						placeholder={t("Login.usernamePlaceholder")}
						icon={username}
					/>
					<InputLogin
							type="password"
							placeholder={t("Login.passwordPlaceholder")}
							icon={password}
						/>
					<p className="Login__Already"><span>{t("Login.forgot")}</span></p>

					<ButonIcon linkBtn="SectionPr2" offsetBtn={-150} txt="loginBtn"
								BGcolor="#2D2E2D" color="#fff" margin="5px 0"
								HoverBGcolor="#696869" HoverColor="white"
								border="1px solid #8878BF"
								HoverBorder="1px solid black"/>
					<p className="Login__Already">{t("Login.Already")}<span>{t("Login.Signin")}</span></p>
				</div>
				<div className="Login__right">
					<Fade>
					<div className="col-sm-12 col-lg-6 sectionH1__right text-dark">
						<div className="sectionH1__box1">
							<div  className="sectionH1__right--icon bg"/>
							<div><p>100%</p><p>{t("Home.section_1.info1")}</p></div>
						</div>
						<div className="sectionH1__img1 bg"/>
						<div className="sectionH1__img2 bg"/>
						<div className="sectionH1__box2">
							<div  className="sectionH1__right--icon2 bg"/>
							<div><p>{t("Home.section_1.info2a")}</p><p>{t("Home.section_1.info2b")}</p></div>
						</div>
					</div></Fade>
				</div>
			</div>
		</div>
	)
}

export default SignUp;
