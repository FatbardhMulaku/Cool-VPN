import React, {lazy} from "react";
import WrapSupsense from "../components/Shared/WrapSupsense"
import Header from "../components/Shared/Header";
const LazyLoaded = lazy(() => import("../components/VPNsetupStep/index"))

const VPNsetupStep = () => {
  return (
    <WrapSupsense>
        <Header BCs="#3b2b72" BC="transparent" TXT="a_white" LO="white_logo" BTN="white"/>
        <LazyLoaded />
    </WrapSupsense>)   
};
export default VPNsetupStep;
