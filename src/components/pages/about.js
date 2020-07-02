import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class About extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div id="text-p" contenteditable spellcheck="false">
            <p>Hi, I am Mischa Achmat.</p>

            <p> I am very passionate about technology.</p>

            <p>
              {" "}
              My dream is to become a Major Tech Gaint leading technology from
              the front font.
            </p>

            <p>
              {" "}
              I am excited each and everyday to learn something new and you can
              hardly get me away from my laptop.
            </p>

            <p>
              Read More{" "}
              <a
                href="https://drive.google.com/drive/folders/14REP-wA8f1k1QC_qlOAzleqPu9zwVTnl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Here
              </a>
            </p>

            <br />
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default About;
