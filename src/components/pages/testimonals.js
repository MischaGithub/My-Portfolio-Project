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
          <CardText
            style={{
              fontSize: "1em",
              textTransform: "uppercase",
              color: "#111",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
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
          <CardText
            style={{
              fontSize: "1em",
              textTransform: "uppercase",
              color: "#111",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
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
          <CardText
            style={{
              fontSize: "1em",
              textTransform: "uppercase",
              color: "#111",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
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
          <CardText
            style={{
              fontSize: "1em",
              textTransform: "uppercase",
              color: "#111",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
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
          <CardText
            style={{
              fontSize: "1em",
              textTransform: "uppercase",
              color: "#111",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </CardText>
        </Card>
      </div>
    );
  }
}

export default Testimonals;
