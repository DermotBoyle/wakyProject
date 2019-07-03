import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import placeholder from "./images/placeholder.png";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";
import qs from "qs";
import LeafletMap from "./LeafletMap";
import "./veterinaria.css";

class Veterinaria extends Component {
  constructor() {
    super();
    this.state = { veterinarias: [] };
  }
  /*componentDidMount() {
    console.log(window.location.search, qs.parse(window.location.search));
  }*/
  componentDidMount = () => {
    const query = qs.parse(window.location.search);
    const postcode = query["?q"] || "28025";
    console.log(window.location.search, query);
    fetch("/api/veterinary?cp=" + postcode) // "/api/veterinary?cp=" + e.target.value // dispaly in the map
      .then(response => response.json())
      .then(data => {
        this.setState({
          veterinarias: data
        });
      });
  };

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
    const veterinarias = this.state.veterinarias || [];
    console.log(veterinarias);
    return (
      <>
        <div className="d-flex justify-content-between">
          <div className="flex-column">
            <h3
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: "15px",
                fontWeight: "bold",
                color: "#6b6e7f",
                textAlign: "left",
                margin: "30px 0px 20px 20px"
              }}
            >
              Veterinarias en{" "}
            </h3>
            <hr />
            <p
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: "10px",
                fontWeight: "bold",
                color: "#6b6e7f",
                textAlign: "left",
                margin: "30px 0px 0px 20px"
              }}
            >
              Introduce la direccion
            </p>
            <InputGroup style={{ margin: "10px 0px 0px 10px", width: "95%" }}>
              <Input
                onChange={this.addressInput}
                onKeyPress={this.keyPressed}
              />
              <InputGroupAddon addonType="append">
                <InputGroupText>Here little icon</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <br />
            <Button
              color="success"
              size="s"
              style={{ margin: "0px 0px 20px 20px", height: "40px" }}
              onClick={this.onButtonSubmit}
            >
              {" "}
              Buscar{" "}
            </Button>
            <div className="cardsdiv">
              {veterinarias.map(veterinaria => (
                <div className="showCards">
                  <Card className="selectedCard">
                    <CardImg
                      className="vetimg"
                      top
                      width="100%"
                      src={placeholder}
                      alt="Card image cap"
                    />
                    <CardBody className="selectedcardbody">
                      <CardTitle className="selectedTitle">
                        {veterinaria.name}
                      </CardTitle>
                      <p className="selectedUpdated">
                        {veterinaria.updatedAt}INFO HERE
                      </p>
                      <hr />
                      <CardSubtitle className="selectedCP">
                        CP :{veterinaria.cp}
                      </CardSubtitle>
                      <CardText>
                        <a href={veterinaria.web}>Website</a>
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <div className="backgroudUnderMap">
            <LeafletMap veterinarias={veterinarias} />
          </div>
        </div>
      </>
    );
  }
}

export default Veterinaria;
