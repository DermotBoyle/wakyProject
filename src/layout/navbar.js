import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";
import "./navbar.css";
import Logo from "../images/logo.png";
import Modal from "./modal";
import { EventEmitter } from "events";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
    this.toggle = this.toggle.bind(this);
    this.closeClick = this.closeClick.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.state = {
      isOpen: false,
      show: false,
      displayregister: false
    };
  }

  show() {
    console.log("open");
    this.setState({
      show: !this.state.show
    });
  }

  closeClick() {
    console.log("close");
    this.setState({
      show: !this.state.show
    });
  }

  handleRegister() {
    this.setState({
      displayregister: !this.state.displayregister
    });
  }

  keyPressed = event => {
    console.log(event.target.value);
  };

  toggle() {
    console.log("toggle");
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar
          color="white"
          light
          expand="md"
          style={{ boxShadow: "0 4px 4px -2px rgba(0,0,0,.2)" }}
          onKeyPress={this.KeyPressed}
        >
          <img src={Logo} width="13%" />
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/veterinaria">
                  {/*This link does not work on wireframe. For now it will take you to Veterinaria */}
                  ¿Tienes una veterenaria?
                </NavLink>
              </NavItem>
              <NavItem>
                {/*This link does not work on wireframe */}
                <NavLink href="/contacto">Contacto</NavLink>
              </NavItem>
              {/*the button has to have onClick stuff for register */}
              <Button
                to="registration"
                color="success"
                size="xs"
                onClick={this.show}
              >
                Iniciar Sesion
              </Button>
              <Modal
                show={this.state.show}
                onKeyPress={this.KeyPressed}
                closeClick={this.closeClick}
                displayregister={this.state.displayregister}
                handleRegister={this.handleRegister}
              />

              {/* login */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
