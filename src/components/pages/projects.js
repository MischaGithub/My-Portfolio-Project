import React, { Component } from "react";
import { Card, CardText, CardActions } from "react-mdl";

import Project_Icon from "../assets/project_icons_2.jpg";

class Projects extends Component {
  render() {
    return (
      <div className="projects-body">
        <h2 style={{ textAlign: "center", fontWeight: "bolder" }}>
          My Projects
        </h2>
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
                  The Lottery System was build to generate random lottery
                  numbers. Once a user selects their 6 numbers it will match
                  what the system kicks out and then match the numbers based on
                  a prize category.
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
                  track of visitors and gives them the option to log in and
                  register if they are new but also its use is for employees for
                  daliy Attendance.
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
      </div>
    );
  }
}

export default Projects;
