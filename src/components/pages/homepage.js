import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <img
            src="https://guillaumebreux.com/avatar.png"
            alt="avatar"
            className="avatar-img"
          />
          <div id="text" contenteditable spellcheck="false">
            <p>Full Stack Developer</p>

            <p> JavaScript | React | Python | MySQL </p>

            <br />
            <div className="social-links">
              {/* LinkedId */}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
              {/* Github */}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
              {/* Codepen*/}
              <a
                href="http://google.com"
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

export default LandingPage;
