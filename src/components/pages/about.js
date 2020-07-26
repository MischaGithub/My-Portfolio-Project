import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

import about_mischa from "../assets/Mischa_about2.jpg";
class About extends Component {
  render() {
    return (
      <div className="about-container ">
        <Grid>
          <Cell col={6}>
            <div className="aboutme-container">
              <div className="about-grid">
                <img src={about_mischa} alt="avatar" className="about-card" />
              </div>

              <p>
                I am a determined, passionate and a hardworking individual. I am
                always striving to do my best in everything I do. I am driven
                each and everyday to become better than I was yesterday.
                Whatever obstacles may come I tackle them head on, fear does not
                scare me it motivates me more to come out of my comfort zone.
              </p>
            </div>

            {/* Hobbies */}
            <div className="aboutme-container">
              <div>
                <h4 style={{ textDecoration: "underline" }}>Hobbies</h4>
                <ul>
                  <li>Coding</li>
                  <li>Listening to music</li>
                  <li>Reading</li>
                  <li>Swimming</li>
                  <li>Meditate</li>
                </ul>
              </div>
            </div>
            {/* End of Hobbies */}

            <div className="aboutme-container">
              <h4 style={{ textDecoration: "underline" }}>Education</h4>

              {/* High School Information */}

              <div>
                <h6>Alexander Secondary High School</h6>
                <ul>
                  Course:
                  <li>Arts</li> Period:
                  <li>2010-2011</li> Completed:
                  <li>Yes</li>
                </ul>
              </div>

              {/* College Information */}

              <div>
                <h6>College of Cape Town (Crawford Campus)</h6>
                <ul>
                  Course:
                  <li>Information Technology</li>
                  Period:
                  <li>2013-2014</li>
                  Completed:
                  <li>Yes</li>
                </ul>
              </div>

              {/* End of College Info */}
            </div>
          </Cell>
          <Cell col={6}>
            {/* Work Experience */}
            <div className="aboutme-container">
              <h4 style={{ textDecoration: "underline" }}>Work Experience</h4>
              {/* Hamleys Work Info */}

              <div>
                <h6>Hamleys</h6>
                <ul>
                  Period:
                  <li>2015-2016</li>
                  Role:
                  <li>Sales Advisor</li>
                  Duties:
                  <li>Perform till duties</li>
                  <li>Stock intake and checking out stock</li>
                  <li>Managing staff in the stock room on a daily basis</li>
                  <li>Advising on products</li>
                </ul>
              </div>

              {/* End of Hamleys Info */}

              {/* Archive Work Info */}

              <div>
                <h6>Archive TFG</h6>
                <ul>
                  Period:
                  <li>2017-2018</li>
                  Role:
                  <li>Sales Advisor and 2IC</li>
                  Duties:
                  <li>Managing Staff on a daily basis</li>
                  <li>
                    Completing daily reports and achieving monthly targets
                  </li>
                  <li>Stock intake and checking out stock</li>
                  <li>
                    Putting up visual layouts as required from head office
                  </li>
                </ul>
              </div>

              {/*End of Archive Info */}

              {/* Shumani Work Info */}

              <div>
                <h6>Shumani RSA</h6>
                <ul>
                  Period:
                  <li>2019-2020</li>
                  Role:
                  <li>Table Hand</li>
                  Duties:
                  <li>
                    Assisting by the Kolbus creating books on a daily basis
                  </li>
                  <li>Folding by the table</li>
                  <li>Assisting by the Saddle stitcher on a daily basis</li>
                  <li>Packaging products</li>
                </ul>
              </div>

              {/* End of Shumani Infor */}
            </div>

            {/* Contact Info */}
            <div className="aboutme-container">
              <div>
                <h4 style={{ textDecoration: "underline" }}>
                  Contact Information
                </h4>
                <ul>
                  Address:
                  <li>150 Koodoo Street, Kewtown, ATHLONE 7764</li>
                  Email:
                  <li>mischa.achmat120212@gmail.com</li>
                  Contact Number:
                  <li>068 566 3319</li>
                </ul>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
