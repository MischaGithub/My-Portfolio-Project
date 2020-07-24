import React, { Component } from "react";
import { Grid, Cell, Card, CardTitle, CardText, CardActions } from "react-mdl";

import Mischa from "../assets/developer.webp";

class Homepage extends Component {
  render() {
    return (
      <div className="container">
        <div className="container">
          {/* Card 1 React Project #1*/}
          <div className="conatiner">
            <div>
              <img src={Mischa} alt="landing" className="landing-img" />
            </div>
            <div>
              <p className="p">Hi, I am Mischa Achmat...</p>
              <p className="p">I am a Junior FullStack Developer.</p>
              <p
                className="p"
                style={{ color: "purple", fontWeight: "bolder" }}
              >
                I am a creative, determined, passionate, tech and
                business-minded individual. I am driven by my dream to become a
                Tech Giant. I aspire to follow my own path in life and continue
                to stay true to my values and morals. I believe that we are each
                capable, worthy and strong enough to live an extraordinary life.
              </p>
            </div>
            <CardActions border>
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
            </CardActions>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
