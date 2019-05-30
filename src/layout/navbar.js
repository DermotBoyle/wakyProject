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

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="white" light expand="md">
          <img src={Logo} width="13%" />
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/blog/">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/veterenarias/">
                  ¿Tienes una veterenaria?
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contacto/">Contacto</NavLink>
              </NavItem>
              <Button color="success" size="xs">
                Iniciar Sesion
              </Button>{" "}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
