import React, { Component } from "react";

import { Card, CardTitle, CardText } from "react-mdl";

class Testimonals extends Component {
  render() {
    return (
      <div className="testimonal-grid ">
        {/* Card 1 Ariya Testimonal*/}

        <Card shadow={5} className="testimonal-cards" style={{ margin: "2em" }}>
          <CardTitle
            style={{
              color: "#000",
              height: "380px",
              background:
                "url(https://static.vecteezy.com/system/resources/previews/000/148/181/original/testimonials-icon-set-vector.png) center / cover",
            }}
          >
            Godwin Dzvapatsva
          </CardTitle>
          <CardText
            style={{
              fontSize: "1.1em",
              color: "#111",
            }}
          >
            Mischa is a strong-minded students and has the courage to stand up
            to challenge constructively. Mischa communicates well when in doubt
            with the mentor and I highly recommend her. Godwin Dzvapatsva (Head
            of Curriculum and Learning)
          </CardText>
        </Card>

        {/* Card 2 Aaqiel Behardien */}
        <Card shadow={5} className="testimonal-cards" style={{ margin: "2em" }}>
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
              fontSize: "1.1em",
              color: "#111",
            }}
          >
            If you are looking for a hard-working individual who knows how to
            have fun, then look no further. Mischa is a keen developer and is
            simply outstanding at everything she does and is always ready to
            assist those in need. But beware, she becomes a an unstoppable force
            when chasing her goals. Aaqiel Behardien (Developer and friend)
          </CardText>
        </Card>

        {/* Card 3 Hishaam De Vries */}
        <Card shadow={5} className="testimonal-cards" style={{ margin: "2em" }}>
          <CardTitle
            style={{
              color: "#000",
              height: "380px",
              background:
                "url(https://static.vecteezy.com/system/resources/previews/000/148/181/original/testimonials-icon-set-vector.png) center / cover",
            }}
          >
            Lukhanyo Vakele
          </CardTitle>
          <CardText
            style={{
              fontSize: "1.1em",
              color: "#111",
            }}
          >
            Mischa is an intelligent, hard working human. She is very dedicated
            in always producing the best in her work. She is an excellent
            problem solver who is always aiming to do things right rather than
            fast. She is an easy person to work with and I have seen her display
            a positive attitude towards her work. Lukhanyo Vakele (Peer)
          </CardText>
        </Card>

        {/* Card 4 Damon Anthony */}
        <Card shadow={5} className="testimonal-cards" style={{ margin: "2em" }}>
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
              fontSize: "1.1em",
              color: "#111",
            }}
          >
            Mischa is a hardworking and determined individual. She is a
            dedicated problem solver who stays focused on the task at hand. She
            has good communication skills and can work independently as well as
            with others. Mischa will be an asset in the workplace. Damon
            Anthony(Peer)
          </CardText>
        </Card>

        {/* Card 5 Viata Fredricks */}
        <Card shadow={5} className="testimonal-cards" style={{ margin: "2em" }}>
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
              fontSize: "1.1em",
              color: "#111",
            }}
          >
            Mischa is a passionate, assertive and hardworking individual. She's
            always willing to learn and isn't afraid to ask questions. Mischa is
            able to work well with others and puts in great efforts to achieve
            her goals. I believe she will do well in the workplace. Viata
            Fredricks(Peer)
          </CardText>
        </Card>
      </div>
    );
  }
}

export default Testimonals;
