import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  Button,
  CardText,
  CardMenu,
  IconButton,
  CardActions,
} from "react-mdl";

class Projects extends Component {
  constructor(props, state) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    // Toggle State
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Card 1 React Project #1*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRea4KeNRJVhvy_AQc8xDfHzIOVEeMWg277YA&usqp=CAU) center / cover",
              }}
            >
              React Project #1
            </CardTitle>
            <CardText style={{ fontSize: "20px", textTransform: "uppercase" }}>
              Github Finder
            </CardText>
            <CardActions border>
              <div className="social-links">
                {/* LinkedId */}
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
                {/* Codepen*/}
              </div>
            </CardActions>
          </Card>

          {/* Card 2 React Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRea4KeNRJVhvy_AQc8xDfHzIOVEeMWg277YA&usqp=CAU) center / cover",
              }}
            >
              React Project #2
            </CardTitle>
            <CardText style={{ fontSize: "20px", textTransform: "uppercase" }}>
              Github Finder
            </CardText>
            <CardActions border>
              <div className="social-links">
                {/* LinkedId */}
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
                {/* Codepen*/}
              </div>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Python</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Python</Tab>
        </Tabs>

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
