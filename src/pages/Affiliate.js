import React, {lazy} from "react";
import WrapSupsense from "../components/Shared/WrapSupsense"
import Header from "../components/Shared/Header";
const LazyLoaded = lazy(() => import("../components/Affiliate/index"))

const Affiliate = () => {
  return (
    <WrapSupsense>
        <Header BCs="#2D2E2D" BC="transparent" TXT="a_white" LO="white_logo" BTN="white"/>
        <LazyLoaded />
    </WrapSupsense>)   
};
export default Affiliate;
