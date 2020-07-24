import React, { Component } from "react";
import { Grid, Cell, CardTitle, CardText, CardActions } from "react-mdl";

class Homepage extends Component {
  render() {
    return (
      <div className="home-container">
        <Grid>
          <div className="landing-box">
            <Cell col={12}>
              {/* Card 1 React Project #1*/}

              <CardTitle
                style={{
                  color: "#000",
                  height: "300px",
                  background:
                    "url(https://www.elegantthemes.com/blog/wp-content/uploads/2018/04/Best-Code-and-Text-Editors.png) center / cover",
                }}
              ></CardTitle>

              <CardText>
                <p className="p">Hi, I am Mischa Achmat...</p>
                <p className="p">I am a Junior FullStack Developer.</p>
                <p
                  className="p"
                  style={{ color: "purple", fontWeight: "bolder" }}
                />
                I am a determined, passionate and a hardworking individual. I am
                always striving to do my best in everything I do. I am driven
                each and everyday to become better than I was yesterday.
                Whatever obstacles may come I tackle them head on, fear does not
                scare me it motivates me more to come out of my comfort zone.
              </CardText>

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
            </Cell>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Homepage;
