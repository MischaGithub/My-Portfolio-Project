import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "../pages/landingpage";
import Projects from "../pages/projects";
import Testimonals from "../pages/testimonals";
import Aboutme from "../pages/about";
import ContactMe from "../pages/contact";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/projects" component={Projects} />
    <Route path="/testimonals" component={Testimonals} />
    <Route path="/about" component={Aboutme} />
    <Route path="/contact" component={ContactMe} />
  </Switch>
);

export default Main;
