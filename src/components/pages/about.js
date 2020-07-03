import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div className="about-body">
        <Grid className="about-grid">
          <Cell col={8}>
            <h2>Mischa Achmat</h2>
            <img
              src="https://s.itl.cat/pngfile/s/327-3275141_software-development.png"
              alt="avatar"
              style={{ height: "320px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              I strive to do the best at everything I do. Life has given me many
              trials and I've always learnt how be strong and optimistic, I
              needed to be in order to grow and evolve. Read More{" "}
              <a
                href="https://drive.google.com/drive/folders/14REP-wA8f1k1QC_qlOAzleqPu9zwVTnl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Here
              </a>
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
