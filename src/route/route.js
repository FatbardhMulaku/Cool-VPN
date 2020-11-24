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

          <Route path="/404" render={() => <PageNotFound />} />
          <Redirect to="/404" />
        </Switch>
      </Layout>
    </Router>
  );
}

export default route;
