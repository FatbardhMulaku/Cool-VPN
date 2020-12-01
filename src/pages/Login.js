import React, {lazy} from "react";
import WrapSupsense from "../components/Shared/WrapSupsense"
import Header from "./../components/Shared/Header";
const LazyLoaded = lazy(() => import("../components/Shared/LoginNav/Login"))

const Login = () => {
  return (
    <WrapSupsense>
         <Header BCs="#2D2E2D"  BC="#2D2E2D" TXT="a_white" LO="white_logo" BTN="white"/>
        <LazyLoaded />
    </WrapSupsense>)   
};
export default Login;