import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

import about_mischa from "../assets/Mischa_about2.jpg";
class About extends Component {
  render() {
    return (
      <div className="about-body ">
        <Grid className="about-grid">
          <Cell col={6}>
            <h2>Mischa Achmat</h2>
            <img
              src={about_mischa}
              alt="avatar"
              style={{ minWidth: "300px", height: "300px" }}
            />
            <p
              style={{
                marginTop: "1em",
                paddingTop: "1em",
                fontSize: "1em",
              }}
            >
              I am a determined, passionate and a hardworking individual. I am
              always striving to do my best in everything I do. I am driven each
              and everyday to become better than i was yesterday. Whatever
              obstacles may come I tackle them head on, fear does not scare me
              it motivates me more to come out of my comfort zone. LifeChoices
              Profile{" "}
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
            <h2>Skills</h2>
            <p>PYTHON</p>
            <div class="container">
              <div class="skills python">90%</div>
            </div>
            <p>MySQL</p>
            <div class="container">
              <div class="skills mysql">80%</div>
            </div>
            <p>HTML</p>
            <div class="container">
              <div class="skills html">80%</div>
            </div>

            <p>CSS</p>
            <div class="container">
              <div class="skills css">70%</div>
            </div>

            <p>JavaScript</p>
            <div class="container">
              <div class="skills js">70%</div>
            </div>

            <p>React</p>
            <div class="container">
              <div class="skills react">70%</div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
