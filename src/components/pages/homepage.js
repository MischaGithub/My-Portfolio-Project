import React, { Component } from "react";
import { Grid, Cell, Card, CardTitle, CardText, CardActions } from "react-mdl";

class Homepage extends Component {
  render() {
    return (
      <div className="portfolio-image">
        <Grid>
          <Cell col={12}>
            {/* Card 1 React Project #1*/}
            <Card shadow={5} style={{ minWidth: "430px", margin: "1.5em" }}>
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
                >
                  My Motto is "Consider every setback as another opportunity to
                  do better."
                </p>
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
            </Card>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Homepage;
