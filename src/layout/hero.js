import React from "react";
import {
  Jumbotron,
  Container,
  InputGroup,
  InputGroupAddon,
  Input,
  Button
} from "reactstrap";
import "./jumbotron.css";

class Head extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  addressInput = e => {
    this.setState({ input: e.target.value });
  };

  onButtonSubmit = () => {
    console.log(this.state.input);
    window.location.href = "/veterinaria?q=" + this.state.input;
  };

  keyPressed = event => {
    if (event.key === "Enter") {
      window.location.href = "/veterinaria?q=" + this.state.input;
    }
  };

  render() {
    return (
      <div>
        <Jumbotron fluid>
          <div className="overLay">
            <Container className="cont" fluid>
              <p className="display-3">Encuentra tu veterinaria idea</p>
              <p className="lead">
                Descubre las mejores veterinarias cerca de ti
              </p>
              <InputGroup>
                <Input
                  className="vetsearch"
                  placeholder="Calle,Barrio o CP"
                  onChange={this.addressInput}
                  onKeyPress={this.keyPressed}
                />
                <InputGroupAddon addonType="append">
                  <Button className="danger" onClick={this.onButtonSubmit}>
                    Buscar
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </Container>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Head;
