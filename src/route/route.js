import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import ScrollToTop from "../components/Shared/ScrollToTop";
import Layout from "../layout/DefaultLayout";
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";
import Features from "../pages/Features";
import Support from "../pages/Support";
import Blog from "../pages/Blog";
import Pricing from "../pages/Pricing";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ContactUs from "../pages/ContactUs";
import Download from "../pages/Download";
import Servers from "../pages/Servers";
import VPNbussines from "../pages/VPNbussines";
import WhatIsVPN from "../pages/WhatIsVPN";
import FAQ from "../pages/faq";
import Tutorials from "../pages/Tutorials";
import PressArea from "../pages/PressArea";
import AboutUs from "../pages/AboutUs";
import Affiliate from "../pages/Affiliate";
import OurTeam from "../pages/OurTeam";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import BecomePartner from "../pages/BecomePartner";
import FreeProxy from "../pages/FreeProxy";
import API from "../pages/Api";
import YoutubeProxy from "../pages/YoutubeProxy";
import VPNforRouters from "../pages/VPNforRouters";
import Product from "../pages/Product";
import Articles from "../pages/Articles";
import WhyVPN from "../pages/WhyVPN";
import AnonymousIP from "../pages/AnonymousIP";
import LatestVPNprotocols from "../pages/LatestVPNprotocols";
import VPNsetupStep from "../pages/VPNsetupStep";
import AffiliateSales from "../pages/AffiliateSales";
import ResellerHistory from "../pages/ResellerHistory";
import RequestSupport from "../pages/RequestSupport";
import Imprint from "../pages/Imprint";
import BloginDepth from "../pages/BloginDepth";
 
const route = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/features" exact render={() => <Features />} />
          <Route path="/support" exact render={() => <Support />} />
          <Route path="/blog" exact render={() => <Blog />} />
          <Route path="/Pricing" exact render={() => <Pricing />} />
          <Route path="/Login" exact render={() => <SignUp />} />
          <Route path="/SignUp" exact render={() => <Login />} />
          <Route path="/ContactUs" exact render={() => <ContactUs />} />
          <Route path="/Download" exact render={() => <Download />} />
          <Route path="/servers" exact render={() => <Servers />} />
          <Route path="/vpn-for-bussines" exact render={() => <VPNbussines />} />
          <Route path="/what-is-CoolVPN" exact render={() => <WhatIsVPN />} />
          <Route path="/faq" exact render={() => <FAQ />} />
          <Route path="/tutorials" exact render={() => <Tutorials />} />
          <Route path="/press-area" exact render={() => <PressArea />} />
          <Route path="/about" exact render={() => <AboutUs />} />
          <Route path="/affiliate" exact render={() => <Affiliate />} />
          <Route path="/our-team" exact render={() => <OurTeam />} />
          <Route path="/Privacy" exact render={() => <PrivacyPolicy />} />
          <Route path="/become-partner" exact render={() => <BecomePartner />} />
          <Route path="/free-proxy-list" exact render={() => <FreeProxy />} />
          <Route path="/api" exact render={() => <API />} />
          <Route path="/youtube-proxy" exact render={() => <YoutubeProxy />} />
          <Route path="/vpn-routers" exact render={() => <VPNforRouters />} />
          <Route path="/product" exact render={() => <Product />} />
          <Route path="/articles" exact render={() => <Articles />} />
          <Route path="/why-vpn" exact render={() => <WhyVPN />} />
          <Route path="/anonymous-ip-address" exact render={() => <AnonymousIP />} />
          <Route path="/latest-vpn-protocols" exact render={() => <LatestVPNprotocols />} />
          <Route path="/VPN-setup-Step" exact render={() => <VPNsetupStep />} />
          <Route path="/affiliate-sales" exact render={() => <AffiliateSales />} />
          <Route path="/reseller-history" exact render={() => <ResellerHistory />} />
          <Route path="/request-support" exact render={() => <RequestSupport />} />
          <Route path="/imprint" exact render={() => <Imprint />} />
          <Route path="/blog-in-depth" exact render={() => <BloginDepth />} />

          <Route path="/404" render={() => <PageNotFound />} />
          <Redirect to="/404" />
        </Switch>
      </Layout>
    </Router>
  );
}

export default route;
