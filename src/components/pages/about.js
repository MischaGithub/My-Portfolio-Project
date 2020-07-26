import React, { Component } from "react";
import { Grid, Cell, List, ListItemContent } from "react-mdl";

import about_mischa from "../assets/Mischa_about2.jpg";
class About extends Component {
  render() {
    return (
      <div className="about-container ">
        <Grid>
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
              and everyday to become better than I was yesterday. Whatever
              obstacles may come I tackle them head on, fear does not scare me
              it motivates me more to come out of my comfort zone.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>About Me</h2>
            <div className="aboutme-container">
              <h4 style={{ textDecoration: "underline" }}>Education</h4>

              {/* High School Information */}
              <List>
                <div>
                  <h6>Alexander Secondary High School</h6>
                  <ul>
                    Course:
                    <li style={{ padding: "5px", marginLeft: "35px" }}>
                      Arts
                    </li>{" "}
                    Period:
                    <li style={{ padding: "5px", marginLeft: "35px" }}>
                      2010-2011
                    </li>{" "}
                    Completed:
                    <li style={{ padding: "5px", marginLeft: "35px" }}>
                      Yes
                    </li>{" "}
                  </ul>
                </div>
              </List>

              {/* College Information */}
              <List>
                <div>
                  <h6>College of Cape Town (Crawford Campus)</h6>
                  <ul>
                    Course:
                    <li style={{ padding: "5px", marginLeft: "35px" }}>
                      Information Technology
                    </li>{" "}
                    Period:
                    <li style={{ padding: "5px", marginLeft: "35px" }}>
                      2013-2014
                    </li>{" "}
                    Completed:
                    <li style={{ padding: "5px", marginLeft: "35px" }}>
                      Yes
                    </li>{" "}
                  </ul>
                </div>
              </List>
            </div>

            {/* Work Experience */}
            <div className="aboutme-container">
              <h4 style={{ textDecoration: "underline" }}>Work Experience</h4>
              {/* Hamleys Work Info */}
              <List>
                <div>
                  <h6>Hamleys</h6>
                  <ul>
                    Period:
                    <li style={{ padding: "5px", marginLeft: "35px" }}>
                      2015-2016
                    </li>{" "}
                    Role:
                    <li style={{ padding: "5px", marginLeft: "35px" }}>
                      Sales Advisor
                    </li>{" "}
                    Duties:
                    <li style={{ padding: "5px", marginLeft: "35px" }}>
                      Perform till duties
                    </li>{" "}
                    <li style={{ padding: "5px", marginLeft: "35px" }}>
                      Stock intake and checking out stock
                    </li>{" "}
                    <li style={{ padding: "5px", marginLeft: "35px" }}>
                      Managing staff in the stock room on a daily basis
                    </li>{" "}
                    <li style={{ padding: "5px", marginLeft: "35px" }}>
                      Advising on products
                    </li>{" "}
                  </ul>
                </div>
              </List>

              {/* Archive Work Info */}
              <List>
                <div>
                  <ListItemContent>Company: Archive-TFG</ListItemContent>
                  <div>
                    <ListItemContent>
                      Role: Sales Advisor and 2IC
                    </ListItemContent>
                  </div>
                  <div>
                    <ListItemContent>Period: 2017-2018</ListItemContent>
                  </div>
                  <div>
                    Duties:
                    <div>
                      <ListItemContent>
                        Managing Staff on a daily basis
                      </ListItemContent>
                    </div>
                    <div>
                      <ListItemContent>
                        Completing daily reports and achieving monthly targets
                      </ListItemContent>
                    </div>
                    <div>
                      <ListItemContent>
                        Stock intake and checking out stock
                      </ListItemContent>
                    </div>
                    <div>
                      <ListItemContent>
                        Putting up visual layouts as required from head office
                      </ListItemContent>
                    </div>
                  </div>
                </div>
              </List>

              {/* Shumani Work Info */}
              <List>
                <div>
                  <ListItemContent>Company: Shumani RSA</ListItemContent>
                  <div>
                    <ListItemContent>Role: Table Hand</ListItemContent>
                  </div>
                  <div>
                    <ListItemContent>Period: 2019-2020</ListItemContent>
                  </div>
                  <div>
                    Duties:
                    <div>
                      <ListItemContent>
                        Assisting by the Kolbus creating books on a daily basis
                      </ListItemContent>
                    </div>
                    <div>
                      <ListItemContent>Folding by the table</ListItemContent>
                    </div>
                    <div>
                      <ListItemContent>
                        Assisting by the Saddle stitcher on a daily basis
                      </ListItemContent>
                    </div>
                    <div>
                      <ListItemContent>Packaging products</ListItemContent>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
