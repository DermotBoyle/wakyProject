import React, { Component } from "react";
import "./modal.css";
import { Button } from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { thisExpression } from "@babel/types";

library.add(fab, faTimesCircle);

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "dermot@hotmail.com",
      password: "123456",
      message: ""
    };
  }

  handleChangeEmail = e => {
    console.log(e.target.value);
    this.setState({ email: e.target.value });
  };

  handleChangePassword = e => {
    console.log(e.target.value);
    this.setState({ password: e.target.value });
  };

  handleLogin = function() {
    console.log("handling login....", this.state);
    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: { "Content-Type": "application/json" } // otras opciones application/xml, text/csv, application/multipart-form-data
    }).then(res => {
      console.log("login finished, here is response", res);
      if (res.status === 200) alert("Login success!");
      else alert("Login error " + res.status);
    });
  };

  render() {
    const {
      handleClose,
      show,
      handleChangePassword,
      handleChangeEmail,
      handleLogin,
      closeClick,
      handleRegister
    } = this.props;

    const showHideClassName = show
      ? "myModal display-box"
      : "myModal display-none";

    return (
      <div className={showHideClassName} onKeyPress={handleClose}>
        <div className="modalcontainer">
          <div />
          <div className="formwrapper">
            <div className="signinContainer">
              <div className="closeBtn">
                <a href="#" onClick={closeClick}>
                  <FontAwesomeIcon icon="times-circle" />
                </a>
              </div>
              <h5>LogIn</h5>
              <Button className="FacebookBtn">
                <FontAwesomeIcon
                  id="facebookicon"
                  icon={["fab", "facebook-f"]}
                />
                Entrar con Facebook
              </Button>
              <hr />
              <p id="obreak">o</p>
              <div className="borderbottom">
                <Button id="logIn">LogIn</Button>
                <Button id="Registro" onClick={handleRegister}>
                  Registro
                </Button>
              </div>
              <form>
                <div className="inputfield">
                  <label className="labelInput" htmlFor="email">
                    Email
                  </label>
                  <br />
                  <input
                    value={this.state.email}
                    id="email"
                    type="email"
                    onChange={this.handleChangeEmail}
                  />
                </div>
                <div className="inputfield">
                  <label htmlFor="password">Password</label>
                  <br />
                  <input
                    value={this.state.password}
                    id="password"
                    type="password"
                    onChange={this.handleChangePassword}
                  />
                </div>
                <Button id="Entrar" onClick={this.handleLogin}>
                  Entrar
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
