import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/pages/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header title="Mischa Achmat" scroll>
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
