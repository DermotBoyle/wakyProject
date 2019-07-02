import React, { Component } from "react";
import "./modal.css";
import { Button } from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faTimesCircle);

const Modal = ({
  handleClose,
  show,
  children,
  handleChangePassword,
  handleChangeEmail,
  handleLogin,
  closeClick
}) => {
  const showHideClassName = show
    ? "myModal display-box"
    : "myModal display-none";

  handleChangeEmail = e => {
    console.log(e.target.value);
  };

  handleChangePassword = e => {
    console.log(e.target.value);
  };

  handleLogin = function() {
    console.log(this.state.email);
    console.log(this.state.password);
  };

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
              <FontAwesomeIcon id="facebookicon" icon={["fab", "facebook-f"]} />
              Entrar con Facebook
            </Button>
            <hr />
            <p id="obreak">o</p>
            <div className="borderbottom">
              <Button id="logIn">LogIn</Button>
              <Button id="Registro">Registro</Button>
            </div>
            <form>
              <div className="inputfield">
                <label className="labelInput" htmlFor="email">
                  Email
                </label>
                <br />
                <input id="email" type="email" onChange={handleChangeEmail} />
              </div>
              <div className="inputfield">
                <label htmlFor="password">Password</label>
                <br />
                <input
                  id="password"
                  type="password"
                  onChange={handleChangePassword}
                />
              </div>
              <Button id="Entrar" onClick={handleLogin}>
                Entrar
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
