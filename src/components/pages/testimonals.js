import React, { Component } from "react";

import { Card, CardTitle, CardText } from "react-mdl";

class Testimonals extends Component {
  render() {
    return (
      // React Projects Tab
      <div className="testimonal-grid">
        {/* Card 1 Ariya Testimonal*/}
        <Card shadow={5} style={{ minWidth: "450px", margin: "1.5em" }}>
          <CardTitle
            style={{
              color: "#000",
              height: "380px",
              background:
                "url(https://static.vecteezy.com/system/resources/previews/000/148/181/original/testimonials-icon-set-vector.png) center / cover",
            }}
          >
            Ariya Lucas
          </CardTitle>
          <CardText style={{ fontSize: "20px", textTransform: "uppercase" }}>
            Testimonal
          </CardText>
        </Card>

        {/* Card 2 Aaqiel Behardien */}
        <Card shadow={5} style={{ minWidth: "450px", margin: "1.5em" }}>
          <CardTitle
            style={{
              color: "#111",
              fontWeight: "bold",
              height: "380px",
              background:
                "url(https://static.vecteezy.com/system/resources/previews/000/148/181/original/testimonials-icon-set-vector.png) center / cover",
            }}
          >
            Aaqiel Behardien
          </CardTitle>
          <CardText style={{ fontSize: "20px", textTransform: "uppercase" }}>
            Testimonal
          </CardText>
        </Card>

        {/* Card 3 Hishaam De Vries */}
        <Card shadow={5} style={{ minWidth: "450px", margin: "1.5em" }}>
          <CardTitle
            style={{
              color: "#000",
              height: "380px",
              background:
                "url(https://static.vecteezy.com/system/resources/previews/000/148/181/original/testimonials-icon-set-vector.png) center / cover",
            }}
          >
            Hishaam De Vries
          </CardTitle>
          <CardText style={{ fontSize: "20px", textTransform: "uppercase" }}>
            Testimonal
          </CardText>
        </Card>

        {/* Card 4 Damon Anthony */}
        <Card shadow={5} style={{ minWidth: "450px", margin: "1.5em" }}>
          <CardTitle
            style={{
              color: "#000",
              height: "380px",
              background:
                "url(https://static.vecteezy.com/system/resources/previews/000/148/181/original/testimonials-icon-set-vector.png) center / cover",
            }}
          >
            Damon Anthony
          </CardTitle>
          <CardText style={{ fontSize: "20px", textTransform: "uppercase" }}>
            Testimonal
          </CardText>
        </Card>

        {/* Card 5 Viata Fredricks */}
        <Card shadow={5} style={{ minWidth: "450px", margin: "1.5em" }}>
          <CardTitle
            style={{
              color: "#000",
              height: "380px",
              background:
                "url(https://static.vecteezy.com/system/resources/previews/000/148/181/original/testimonials-icon-set-vector.png) center / cover",
            }}
          >
            Viata Fredricks
          </CardTitle>
          <CardText style={{ fontSize: "20px", textTransform: "uppercase" }}>
            Testimonal
          </CardText>
        </Card>
      </div>
    );
  }
}

export default Testimonals;
