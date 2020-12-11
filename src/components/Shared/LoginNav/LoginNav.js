import React from "react";
import { Route } from 'react-router-dom';
import "./LoginNav.css";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { useTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    klasa1:{
      backgroundColor: 'transparent',
      padding: '8px 15px',
      color: 'white',
      fontWeight: 'normal',
      cursor:'pointer',
      borderRadius: '15px',
      border: '1px solid transparent',
      "&:hover": {
        border: '1px solid white',
      }
    },
    klasa1a:{
      border: '1px solid white',
      padding: '8px 15px',
      fontWeight: 'normal',
      cursor:'pointer',
      borderRadius: '15px',
      color: 'white',
      "&:hover": {
        border: '1px solid white',
        color: 'black',
        backgroundColor: 'white',
      }
    },
    klasa2:{
      backgroundColor: 'transparent',
      padding: '8px 15px',
      color: 'white',
      fontWeight: 'normal',
      marginLeft:"10px",
      cursor:'pointer',
      borderRadius: '15px',
      border: '1px solid #fff',
      "&:hover": {
        border: '1px solid white',
        backgroundColor: 'white',
        color: 'black'
      }
    },
    klasa2a:{
      backgroundColor: 'white',
      padding: '8px 15px',
      cursor:'pointer',
      borderRadius: '15px',
      border: '1px solid #fff',
      marginLeft:"10px",
      "&:hover": {
        border: '1px solid white',
        backgroundColor: 'black',
        color: 'white'
      }
    },
    [theme.breakpoints.down('md')]: { 
      backgroundColor: 'red',
      border: 'none'
    },
}));

/* function URLLogin() {
  window.location = '/Login';
}
function URLSignup() {
  window.location = '/SignUp';
}
 */
const LoginNav = (props) => {
  const { t } = useTranslation();
  const classes = useStyles(props);
  const { windowp } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: windowp ? window() : undefined,
  });
  
  return (
    <div>
      <ul className="nav-login p-0 my-auto">
        <li className={trigger ? classes.klasa1a : classes.klasa1}>
        <Route render={({ history}) => (
          <p  onClick={() => { history.push('/Login') }}>{t("loginBtn")}</p>
      )} />
        </li>

        <li  className={trigger ? classes.klasa2a : classes.klasa2}>
        <Route render={({ history}) => (
          <p onClick={() => { history.push('/SignUp') }}>{t("signupBtn")}</p>
      )} />
        </li>
      </ul>

    </div>
  );
};

export default LoginNav;
