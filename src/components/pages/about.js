import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div className="about-body">
        <Grid className="about-grid">
          <Cell col={6}>
            <h2>Mischa Achmat</h2>
            <img
              src="https://cdn4.vectorstock.com/i/thumb-large/18/83/web-developer-design-vector-5881883.jpg"
              alt="avatar"
              style={{ height: "320px" }}
            />
          </Cell>
          <Cell col={6}>
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              I strive to do the best at everything I do. Life has given me many
              trials and I've always learnt how strong and optimistic, I needed
              to be in order to grow and evolve.
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
