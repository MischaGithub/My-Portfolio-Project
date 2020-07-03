import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/homepage";
import Projects from "../pages/projects";
import Testimonals from "../pages/testimonals";
import Aboutme from "../pages/about";
import ContactMe from "../pages/contact";

const Main = () => (
  // Route to navigate between pages
  <Switch>
    <Route exact path="/My-Portfolio-Project/homepage" component={Home} />
    <Route path="/My-Portfolio-Project/projects" component={Projects} />
    <Route path="/My-Portfolio-Project/testimonals" component={Testimonals} />
    <Route path="/My-Portfolio-Project/about" component={Aboutme} />
    <Route path="/My-Portfolio-Project/contact" component={ContactMe} />
  </Switch>
);

export default Main;
