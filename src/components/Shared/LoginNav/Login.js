import React from 'react';
import { useTranslation } from "react-i18next";
import "./_index.scss";
import { makeStyles } from "@material-ui/core/styles";
import { IoMdPerson } from "react-icons/io";
import {HiOutlineMail} from "react-icons/hi"
import ButonIcon  from "../../UI/Button/ButtonIcon";
import InputLogin from "../../UI/Input/InputLogin";
import { IoMdLock } from "react-icons/io";

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

function Login() {
	const { t } = useTranslation();
	const classes = useStyles();
  	const email = <HiOutlineMail className={classes.icon} />;
	const username = <IoMdPerson className={classes.icon} />;
	const password = <IoMdLock className={classes.icon} />;
	return (
		<div className="Login bg">
			<div className="login_wrapper container">
				<div className="Login__left">
					<h3>{t("SignUp.title")}</h3>
					<div className="row">
						<ButonIcon linkBtn="SectionPr2" icon="Login__fb bg" offsetBtn={-150} txt="SignUp.fb"
								BGcolor="#2D2E2D" color="#fff" margin="5px"
								HoverBGcolor="#696869" HoverColor="white"
								border="1px solid #8878BF"
								HoverBorder="1px solid black"/>

						<ButonIcon linkBtn="SectionPr2" icon="Login__apple bg" offsetBtn={-150} txt="SignUp.apple"
							BGcolor="#fff" color="#fff" margin="5px" width="100%"
							HoverBGcolor="#C2C2C2" HoverColor="white"
							border="1px solid #000"
							HoverBorder="1px solid black"/>
						<h2 className="or_divider"> <span>{t("SignUp.or")}</span></h2>
						<div className="row">
							<div className="col-12 col-sm-6">
							<InputLogin
								type="text"
								placeholder={t("SignUp.usernamePlaceholder")}
								icon={username}
							/>
							</div>
							<div className="col-12 col-sm-6">
							<InputLogin
								type="email"
								placeholder={t("SignUp.emailPlaceholder")}
								icon={email}
							/>
							</div>
						</div>
						<InputLogin
							type="password"
							placeholder={t("SignUp.passwordPlaceholder")}
							icon={password}
						/>
					</div>

					<label className="container__lab"><p>{t("SignUp.label")}<span>{t("SignUp.lab1")}</span>{t("SignUp.and")} <span>{t("SignUp.lab1")}</span></p>
						<input type="checkbox" />
						<span className="checkmark"></span>
					</label>
					<ButonIcon linkBtn="SectionPr2" offsetBtn={-150} txt="SignUp.create"
								BGcolor="#2D2E2D" color="#fff" margin="5px 0"
								HoverBGcolor="#696869" HoverColor="white"
								border="1px solid #8878BF"
								HoverBorder="1px solid black"/>
					<p className="Login__Already">{t("SignUp.Already")}<span>{t("SignUp.Signin")}</span></p>
				</div>
				<div className="Login__right">
					<h5>Working...</h5>
				</div>
			</div>
		</div>
	)
}

export default Login;
