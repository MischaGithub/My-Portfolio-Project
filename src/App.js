import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

import Main from "./components/pages/main";

import { Link } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="landing-container">
        <Layout>
          <Header transparent title="Mischa Achmat" scroll>
            <Navigation>
              <Link to="/My-Portfolio-Project">Home</Link>
              <Link to="/My-Portfolio-Project/about">About</Link>
              <Link to="/My-Portfolio-Project/testimonals">Testimonials</Link>
              <Link to="/My-Portfolio-Project/projects">Projects</Link>
              <Link to="/My-Portfolio-Project/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Mischa Achmat">
            <Navigation>
              <Link to="/My-Portfolio-Project">Home</Link>
              <Link to="/My-Portfolio-Project/about">About</Link>
              <Link to="/My-Portfolio-Project/testimonals">Testimonials</Link>
              <Link to="/My-Portfolio-Project/projects">Projects</Link>
              <Link to="/My-Portfolio-Project/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
