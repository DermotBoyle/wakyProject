import React, { Component } from "react";
import "./modal.css";
import { Button } from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faTimesCircle);

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "dermot@hotmail.com",
      password: "123456",
      confirmPassword: "",
      message: "",
      displayRegister: false
    };
  }

  confirmPassword = e => {
    this.setState({
      confirmPassword: e.target.value
    });
  };

  handleRegister = () => {
    console.log("changing");
    this.setState({
      displayRegister: !this.state.displayRegister
    });
  };

  handleLoginSwitch = () => {
    console.log("changing");
    this.setState({
      displayRegister: !this.state.displayRegister
    });
  };

  handleChangeEmail = e => {
    console.log(e.target.value);
    this.setState({ email: e.target.value });
  };

  handleChangePassword = e => {
    console.log(e.target.value);
    this.setState({ password: e.target.value });
  };

  handleLogin = () => {
    console.log("handling login....", this.state);
    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: { "Content-Type": "application/json" } // otras opciones application/xml, text/csv, application/multipart-form-data
    }).then(res => {
      console.log("login finished, here is response", res);
      if (res.status === 200) {
        alert("Login success!");
        window.location.reload();
      } else alert("Login error " + res.status);
    });
  };

  handleRegistration = () => {
    if (this.state.password !== this.state.confirmPassword) {
      alert("passwords entered do not match");
    } else {
      console.log("handling registration....", this.state);

      fetch("/api/registration", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: { "Content-Type": "application/json" } // otras opciones application/xml, text/csv, application/multipart-form-data
      }).then(res => {
        console.log("registration finished, here is response", res);
        if (res.status === 201) {
          alert("Register success!");
          window.location.reload();
        } else alert("register error " + res.status);
      });
    }
  };

  render() {
    const { handleClose, show, closeClick } = this.props;

    const showHideClassName = show
      ? "myModal display-box"
      : "myModal display-none";

    return (
      <div className={showHideClassName} onKeyPress={handleClose}>
        <div className="modalcontainer">
          <div />
          {this.state.displayRegister ? (
            <div className="formwrapper">
              <div className="signinContainer">
                <div className="closeBtn">
                  <a href="#" onClick={closeClick}>
                    <FontAwesomeIcon icon="times-circle" />
                  </a>
                </div>
                <h5 style={{ marginBottom: "1em" }}>SignUp</h5>
                <Button style={{ display: "none" }} className="FacebookBtn">
                  <FontAwesomeIcon
                    id="facebookicon"
                    icon={["fab", "facebook-f"]}
                  />
                  Entrar con Facebook
                </Button>
                <hr style={{ display: "none" }} />
                <div className="borderbottom">
                  <Button
                    id="logIn"
                    onClick={this.handleRegister}
                    style={{ backgroundColor: "#c0c0c0" }}
                  >
                    LogIn
                  </Button>
                  <Button
                    id="Registro"
                    onClick={this.handleRegister}
                    style={{ backgroundColor: "#4496ae" }}
                  >
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
                    <label htmlFor="password">Contraseña</label>
                    <br />
                    <input
                      value={this.state.password}
                      id="password"
                      type="password"
                      onChange={this.handleChangePassword}
                    />
                  </div>
                  <div className="inputfield">
                    <label htmlFor="password">Confirmación Contraseña</label>
                    <br />
                    <input
                      value={this.state.confirmPassword}
                      id="password"
                      type="password"
                      onChange={this.confirmPassword}
                      style={{ marginBottom: "0em" }}
                    />
                  </div>
                  <Button
                    id="Entrar"
                    onClick={this.handleRegistration}
                    style={{ marginTop: "1em" }}
                  >
                    Registrar
                  </Button>
                </form>
              </div>
            </div>
          ) : (
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
                <div className="borderbottom">
                  <Button id="logIn">LogIn</Button>
                  <Button id="Registro" onClick={this.handleRegister}>
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
                    <label htmlFor="password">Contraseña</label>
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
          )}
        </div>
      </div>
    );
  }
}

export default Modal;
