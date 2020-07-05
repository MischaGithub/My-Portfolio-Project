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
              style={{ minWidth: "280px", height: "280px" }}
            />
            <p
              style={{
                width: "50%",
                margin: "auto",
                paddingTop: "1em",
                fontSize: "1.2em",
              }}
            >
              I strive to do the best at everything I do. Life has given me many
              trials and I've always learnt how be strong and optimistic.
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
                fontSize: "2em",
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
                fontSize: "2em",
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
