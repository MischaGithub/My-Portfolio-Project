import React, { Component } from "react";
import { Card, CardActions, Tab, Tabs } from "react-mdl";

import Project_Icon from "../assets/project_icons_2.jpg";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  // ToggleCategory
  toggleCatergories() {
    if (this.state.activeTab === 0) {
      return (
        // This is all the content for the React Projects done over course.
        // I did implement the react-mdl tabs in order to avoid a long scroll on mobile.

        <div className="projects-container">
          {/* Card 1 React Project #1*/}
          <Card shadow={4} className="project-cards">
            <div>
              <img
                src={Project_Icon}
                alt="projects_icon"
                className="project-icon"
              />
            </div>
            <p style={{ fontSize: "20px" }}>React Project #1</p>

            <CardActions border>
              <div>
                <p style={{ fontWeight: "bolder" }}>Github Finder</p>
                <p>
                  {" "}
                  The Github finder gets all the users info from the github api
                  and display the user in a card format and with the on click of
                  more you can view a more detailed profile of the user.
                </p>
              </div>
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
          <Card shadow={4} className="project-cards">
            <div>
              <img
                src={Project_Icon}
                alt="projects_icon"
                className="project-icon"
              />
            </div>
            <p style={{ fontSize: "20px" }}>React Project #2</p>
            <CardActions border>
              <div>
                <p style={{ fontWeight: "bolder" }}>Contact Keeper</p>
                <p>
                  {" "}
                  The Contact Keeper was created for keeping track of user
                  contacts with in a CRUD system. The users can update, add,
                  delete and edit their contacts.
                </p>
              </div>
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
          <Card shadow={4} className="project-cards">
            <div>
              <img
                src={Project_Icon}
                alt="projects_icon"
                className="project-icon"
              />
            </div>
            <p style={{ fontSize: "20px" }}>React Project #3</p>

            <CardActions border>
              <div>
                <p style={{ fontWeight: "bolder" }}>IT Logger</p>
                <p>
                  {" "}
                  The IT Logger is a system built for logging any and all IT
                  system problems it. You are able to give a details summary of
                  what problem is. Also add a Tech to the system
                </p>
              </div>
              <div className="social-links">
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

          {/* Card 3 React Project #4 */}
          <Card shadow={4} className="project-cards">
            <div>
              <img
                src={Project_Icon}
                alt="projects_icon"
                className="project-icon"
              />
            </div>
            <p style={{ fontSize: "20px" }}>React Project #4</p>

            <CardActions border>
              <div>
                <p style={{ fontWeight: "bolder" }}>Vibe</p>
                <p>
                  {" "}
                  Vibe is my end of module JS project. It is a review site where
                  people can find a restaurant based on the category they
                  looking for and it will filter back all the info about the
                  business.
                </p>
              </div>

              <div className="social-links">
                {/* Live Demo */}
                <a
                  href="https://calm-ridge-98144.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-desktop" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="https://github.com/MischaGithub/Vibe-"
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
        // This is My Python Projects done over the course.

        <div className="projects-container">
          {/* Card 1 Python Project #1*/}
          <Card shadow={4} className="project-cards">
            <div>
              <img
                src={Project_Icon}
                alt="projects_icon"
                className="project-icon"
              />
            </div>
            <p style={{ fontSize: "20px" }}> Python Project #1</p>

            <CardActions border>
              <div>
                <p style={{ fontWeight: "bolder" }}>Lottery System</p>
                <p>
                  The Lottery System is a just like any other lottery system a
                  user selects their 6 numbers it will match what the system
                  kicks out and match the numbers to a prize category.
                </p>
              </div>
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
          <Card shadow={4} className="project-cards">
            <div>
              <img
                src={Project_Icon}
                alt="projects_icon"
                className="project-icon"
              />
            </div>
            <p style={{ fontSize: "20px" }}> Python Project #2</p>

            <CardActions border>
              <div>
                <p style={{ fontWeight: "bolder" }}>
                  {" "}
                  LifeChoices Attendance Log
                </p>
                <p>
                  The Attendance Log for LifeChoices was created for keeping
                  track of both visitors and employees, with a log in and
                  register option. With system logs for admin to view anytime.
                </p>
              </div>
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
      // This the the body for the tabs with the tab heading and being able to navigate between the 2.
      <div className="category-tabs">
        <div className="projects-body">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={(tabId) => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>React</Tab>
            <Tab>Python</Tab>
          </Tabs>
          <section>
            <div className="content"> {this.toggleCatergories()}</div>
          </section>
        </div>
      </div>
    );
  }
}

export default Projects;
