import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

import about_mischa from "../assets/Mischa_about2.jpg";
class About extends Component {
  render() {
    return (
      <div className="about-body">
        <Grid className="about-grid">
          <Cell col={6}>
            <h2>Mischa Achmat</h2>
            <img
              src={about_mischa}
              alt="avatar"
              style={{ minWidth: "280px", height: "230px" }}
            />
            <p
              style={{
                width: "50%",
                margin: "auto",
                paddingTop: "1em",
                fontSize: "0.8em",
              }}
            >
              I am a determined, passionate and a hardworking individual. I am
              always striving to do my best in everything I do. I am driven each
              and everyday to become better than i was yesterday. Whatever
              obstacles may come I tackle them head on, fear does not scare me
              it motivates me more to come out of my comfort zone. I aspire to
              be great and lead the Teachnology World from the front foot.
              LifeChoices Profile{" "}
              <a
                href="https://drive.google.com/drive/folders/14REP-wA8f1k1QC_qlOAzleqPu9zwVTnl"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
            </p>
          </Cell>
          <Cell col={6}>
            <p
              style={{
                fontSize: "1.5em",
                fontWeight: "bolder",
                color: "#111",
              }}
            >
              {" "}
              Education
            </p>
            <p style={{ width: "50%", margin: "auto", paddingTop: "0.5em" }}>
              <p
                style={{
                  fontSize: "0.8em",
                  fontWeight: "bold",
                  color: "#0000ff",
                }}
              >
                Alexander Sinton Secondary School
              </p>
              <p
                style={{
                  fontSize: "0.7em",
                  fontWeight: "bold",
                }}
              >
                Grade: 9
              </p>
              <p
                style={{
                  fontSize: "0.7em",
                  fontWeight: "bold",
                }}
              >
                Year: 2011
              </p>
            </p>

            <p style={{ width: "50%", margin: "auto", paddingTop: "0.5em" }}>
              <p
                style={{
                  fontSize: "0.8em",
                  fontWeight: "bold",
                  color: "#0000ff",
                }}
              >
                College of Cape Town I.T
              </p>
              <p
                style={{
                  fontSize: "0.7em",
                  fontWeight: "bold",
                }}
              >
                Level: 2
              </p>
              <p
                style={{
                  fontSize: "0.7em",
                  fontWeight: "bold",
                }}
              >
                Year: 2013-2014
              </p>
            </p>
            <p
              style={{
                fontSize: "1.5em",
                fontWeight: "bolder",
                color: "#111",
              }}
            >
              {" "}
              Skills
            </p>
            <p style={{ width: "50%", margin: "auto", paddingTop: "0.5em" }}>
              <p
                style={{
                  fontSize: "0.8em",
                  fontWeight: "bold",
                  color: "#0000ff",
                }}
              >
                Front End
              </p>
              <p
                style={{
                  fontSize: "0.7em",
                  fontWeight: "bold",
                }}
              >
                HTML | CSS | REACT
              </p>
            </p>

            <p style={{ width: "50%", margin: "auto", paddingTop: "1em" }}>
              <p
                style={{
                  fontSize: "0.8em",
                  fontWeight: "bold",
                  color: "#0000ff",
                }}
              >
                Back End
              </p>
              <p
                style={{
                  fontSize: "0.7em",
                  fontWeight: "bold",
                }}
              >
                PYTHON | MYSQL
              </p>
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
