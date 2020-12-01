import React from "react";
import "./LoginNav.css";
import { useTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    klasa1:{
      backgroundColor: 'transparent',
      padding: '4px 10px',
      color: 'white',
      fontWeight: 'bold',
      cursor:'pointer',
      borderRadius: '6px',
      border: '1px solid transparent',
      "&:hover": {
        border: '1px solid white',
      }
    },
    klasa2:{
      backgroundColor: 'transparent',
      padding: '4px 10px',
      color: 'white',
      fontWeight: 'bold',
      marginLeft:"10px",
      cursor:'pointer',
      borderRadius: '6px',
      border: '1px solid #fff',
      "&:hover": {
        border: '1px solid white',
        backgroundColor: 'white',
        color: 'black'
      }
    },
    [theme.breakpoints.down('md')]: {
      backgroundColor: 'red',
      border: 'none'
    },
}));

function URLLogin() {
  window.location = '/Login';
}
function URLSignup() {
  window.location = '/SignUp';
}

const LoginNav = (props) => {
  const { t } = useTranslation();
  
  const classes = useStyles();
  return (
    <div>
      <ul className="nav-login p-0 my-auto">
        <li className={classes.klasa1}>
          <p onClick={URLLogin}>{t("loginBtn")}</p>
        </li>

        <li  className={classes.klasa2}>
          <p onClick={URLSignup}>{t("signupBtn")}</p>
        </li>
      </ul>

    </div>
  );
};

export default LoginNav;
