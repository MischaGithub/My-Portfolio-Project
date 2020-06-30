import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/pages/main";
import { Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div
        style={{
          height: "100vh",
          background: "cover",
          attachment: "fixed",
          position: "center",
        }}
      >
        <Layout
          style={{
            background:
              "url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover",
          }}
        >
          <Header className="header-color" title="My Portfolio" scroll>
            <Navigation>
              <Link to="/projects">Projects</Link>
              <Link to="/testimonals">Testimonals</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Mischa Achmat">
            <Navigation>
              <Link to="/projects">Projects</Link>
              <Link to="/testimonals">Testimonals</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
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
