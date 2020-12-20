import React, {lazy} from "react";
import WrapSupsense from "../components/Shared/WrapSupsense"
import Header from "./../components/Shared/Header";
const LazyLoaded = lazy(() => import("../components/API/index"))

const Api = () => {
  return (
    <WrapSupsense>
         <Header BCs="#414141"  BC="transparent" TXT="a_white" LO="white_logo" BTN="white"/>
        <LazyLoaded />
    </WrapSupsense>)   
};
export default Api;