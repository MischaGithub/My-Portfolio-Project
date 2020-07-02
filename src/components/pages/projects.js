import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";

class Projects extends Component {
  constructor(props, state) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    // Toggle State
    if (this.state.activeTab === 0) {
      return (
        <div>
          <h1>This is React</h1>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Python</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Python</Tab>
        </Tabs>

        <section className="projects-grid">
          <Grid className="project-grid">
            <Cell col={4}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
