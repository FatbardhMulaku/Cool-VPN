import React, {lazy} from "react";
import WrapSupsense from "../components/Shared/WrapSupsense"
import Header from "./../components/Shared/Header";
const LazyLoaded = lazy(() => import("../components/BecomePartner/index"))

const BecomePartner = () => {
  return (
    <WrapSupsense>
         <Header BCs="#8878BF"  BC="transparent" TXT="a_white" LO="white_logo" BTN="white"/>
        <LazyLoaded />
    </WrapSupsense>)   
};
export default BecomePartner;