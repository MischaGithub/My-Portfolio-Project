import React, { Component } from "react";

import { Card } from "react-mdl";

class Testimonals extends Component {
  render() {
    return (
      <div className="testimonal-container">
        {/* Card 1 Godwin Testimonal*/}

        <Card shadow={5} className="testimonal-cards ">
          <div className="container">
            <h4> - Godwin Dzvapatsva</h4>
            <p>
              Mischa is a strong-minded students and has the courage to stand up
              to challenge constructively. Mischa communicates well when in
              doubt with the mentor and I highly recommend her. Godwin
              Dzvapatsva (Head of Curriculum and Learning)
            </p>
          </div>
        </Card>

        {/* Card 2 Aaqiel Behardien */}
        <Card shadow={5} className="testimonal-cards">
          <div className="container">
            <h4> - Aaqiel Behardien</h4>
            <p>
              If you are looking for a hard-working individual who knows how to
              have fun, then look no further. Mischa is a keen developer and is
              simply outstanding at everything she does and is always ready to
              assist those in need. But beware, she becomes a an unstoppable
              force when chasing her goals. Aaqiel Behardien (Developer and
              friend)
            </p>
          </div>
        </Card>

        {/* Card 3 Lukhanyo Vakele */}
        <Card shadow={5} className="testimonal-cards">
          <div className="container">
            <h4> - Lukhanyo Vakele</h4>
            <p>
              Mischa is an intelligent, hard working human. She is very
              dedicated in always producing the best in her work. She is an
              excellent problem solver who is always aiming to do things right
              rather than fast. She is an easy person to work with and I have
              seen her display a positive attitude towards her work. Lukhanyo
              Vakele (Peer)
            </p>
          </div>
        </Card>

        {/* Card 4 Damon Anthony */}
        <Card shadow={5} className="testimonal-cards">
          <div className="container">
            <h4> - Damon Anthony</h4>
            <p>
              Mischa is a hardworking and determined individual. She is a
              dedicated problem solver who stays focused on the task at hand.
              She has good communication skills and can work independently as
              well as with others. Mischa will be an asset in the workplace.
              Damon Anthony(Peer)
            </p>
          </div>
        </Card>

        {/* Card 5 Viata Fredricks */}
        <Card shadow={5} className="testimonal-cards">
          <div className="container">
            <h4> - Viata Fredricks</h4>

            <p>
              Mischa is a passionate, assertive and hardworking individual.
              She's always willing to learn and isn't afraid to ask questions.
              Mischa is able to work well with others and puts in great efforts
              to achieve her goals. I believe she will do well in the workplace.
              Viata Fredricks(Peer)
            </p>
          </div>
        </Card>
      </div>
    );
  }
}

export default Testimonals;
