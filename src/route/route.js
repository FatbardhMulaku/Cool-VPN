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

          <Route path="/404" render={() => <PageNotFound />} />
          <Redirect to="/404" />
        </Switch>
      </Layout>
    </Router>
  );
}

export default route;
