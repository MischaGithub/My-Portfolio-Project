import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Homepage extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div id="text" contenteditable spellcheck="false">
            <p>Hi, I am Mischa Achmat</p>
            <p> Junior Full Stack Developer</p>

            <p> JavaScript | React | Python | MySQL </p>

            <br />
            <div className="social-links">
              {/* LinkedId */}
              <a
                href="https://www.linkedin.com/in/mischa-achmat-8230361a8/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
              {/* Github */}
              <a
                href="https://github.com/mischaGithub/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
              {/* Codepen*/}
              <a
                href="https://codepen.io/Mischa120212"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-codepen" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Homepage;
