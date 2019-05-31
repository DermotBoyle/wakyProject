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

const Head = props => {
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
              <Input />
              <InputGroupAddon addonType="append">
                <Button classname="searchbutton">Buscar</Button>
              </InputGroupAddon>
            </InputGroup>
          </Container>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Head;
