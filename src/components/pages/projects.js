import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    // Toggle State
    if (this.state.activeTab === 0) {
      return (
        // React Projects Tab
        <div className="projects-grid">
          {/* Card 1 React Project #1*/}
          <Card shadow={5} style={{ minWidth: "450px", margin: "1.5em" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "300px",
                background:
                  "url(https://i.pinimg.com/originals/8f/da/4b/8fda4ba42cdc0ce3c6c85832bb076d02.jpg) center / cover",
              }}
            >
              React Project #1
            </CardTitle>
            <CardText style={{ fontSize: "20px", textTransform: "uppercase" }}>
              Github Finder
            </CardText>
            <CardActions border>
              <div className="social-links">
                {/* Live Demo */}
                <a
                  href="https://mischa-github-finder.netlify.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-desktop" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="https://github.com/mischaGithub/Github-Finder-Project"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </CardActions>
          </Card>

          {/* Card 2 React Project #2 */}
          <Card shadow={5} style={{ minWidth: "450px", margin: "1.5em" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "300px",
                background:
                  "url(https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-4/177800/201-512.png) center / cover",
              }}
            >
              React Project #2
            </CardTitle>
            <CardText style={{ fontSize: "20px", textTransform: "uppercase" }}>
              Contact Keeper
            </CardText>
            <CardActions border>
              <div className="social-links">
                {/* Live Demo */}
                <a
                  href="https://morning-shelf-16921.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-desktop" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="https://github.com/MischaGithub/ContactKeeper-React-Project-2"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </CardActions>
          </Card>

          {/* Card 3 React Project #3 */}
          <Card shadow={5} style={{ minWidth: "450px", margin: "1.5em" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "300px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0Ljs-_14R0TpjjqmYj7Sqnnmu_Gi19z9K6w&usqp=CAU) center / cover",
              }}
            >
              React Project #3
            </CardTitle>
            <CardText style={{ fontSize: "20px", textTransform: "uppercase" }}>
              IT LOGGER
            </CardText>
            <CardActions border>
              <div className="social-links">
                {/* Live Demo */}
                <a
                  href="https://morning-shelf-16921.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-desktop" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="https://github.com/MischaGithub/IT-LOGGER-PROJECT-3"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        // Python Projects Tab
        <div className="projects-grid">
          {/* Card 1 Python Project #1*/}
          <Card shadow={5} style={{ minWidth: "450px", margin: "1.5em" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "300px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIRtTHoo3u9yOySxuq3_DMoSA0qeAOwEvUzA&usqp=CAU) center / cover",
              }}
            >
              Python Project #1
            </CardTitle>
            <CardText style={{ fontSize: "20px", textTransform: "uppercase" }}>
              Lottery System
            </CardText>
            <CardActions border>
              <div className="social-links">
                {/* Github */}
                <a
                  href="https://github.com/MischaGithub/Python-project"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </CardActions>
          </Card>

          {/* Card 2 Python Project #2*/}
          <Card shadow={5} style={{ minWidth: "450px", margin: "1.5em" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "300px",
                background:
                  "url(https://i7.pngguru.com/preview/517/876/849/purple-symbol-brand-violet-time-machine.jpg) center / cover",
              }}
            >
              Python Project #2
            </CardTitle>
            <CardText style={{ fontSize: "20px", textTransform: "uppercase" }}>
              LifeChoices Attendance Log
            </CardText>
            <CardActions border>
              <div className="social-links">
                {/* Github */}
                <a
                  href="https://github.com/MischaGithub/LIFECHOICE-PROJECTS"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </CardActions>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      // The layout for the projects category having it as Tabs
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Python</Tab>
        </Tabs>

        {/* Cards with its content */}
        <Grid>
          <Cell col={4}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
