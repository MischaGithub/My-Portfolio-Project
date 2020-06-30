import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
import Projects from "./projects";
import Testimonals from "./testimonals";
import Aboutme from "./about";
import ContactMe from "./contact";

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
