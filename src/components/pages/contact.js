import React from "react";
import { Grid, Cell } from "react-mdl";

class Contact extends React.Component {
  // Form state
  constructor(props) {
    super(props);
    this.state = {
      disable: false,
      emailSent: null,
    };
  }

  // Form submission and its events
  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      disable: true,
      emailSent: true,
    });
  };
  render() {
    return (
      <div className="contact-body">
        <h1 style={{ textAlign: "center", fontWeight: "bolder" }}>
          Let's Talk{" "}
        </h1>
        <Grid className="contact-grid">
          <Cell col={10}>
            <form onSubmit={this.handleSubmit}>
              {/* Full Name */}
              <div className="form-group">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 mx-auto">
                    <label htmlFor="full-name" style={{ fontSize: "1.5em" }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-lg"
                      id="name"
                      placeholder="Full Name..."
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="form-group">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 mx-auto">
                    <label htmlFor="email" style={{ fontSize: "1.5em" }}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="_replyto"
                      className="form-control form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="Email..."
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="form-group hiddenRight">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 mx-auto">
                    <label htmlFor="email" style={{ fontSize: "1.5em" }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      className="form-control form-control-lg"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Write your message..."
                    />
                  </div>
                </div>
              </div>
              <div className="row text-md-left text-sm-center">
                <div className="col-12 col-sm-12 col-md-6 mx-auto">
                  <button
                    type="submit"
                    className="btn btn-primary mb-2"
                    style={{
                      width: "10em",
                      height: "3em",
                    }}
                  >
                    Send
                  </button>
                  {this.state.emailSent === true && (
                    <p className="d-inline success-msg">Email Sent</p>
                  )}
                  {this.state.emailSent === false && (
                    <p className="d-inline err-msg">Email not send</p>
                  )}
                </div>
              </div>
            </form>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;