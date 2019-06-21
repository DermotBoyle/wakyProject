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

const urlRoot = window.location.href.indexOf("localhost")
  ? "http://localhost:3001"
  : "";

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
    fetch(urlRoot + "/api/veterinary?cp=" + postcode) // "/api/veterinary?cp=" + e.target.value // dispaly in the map
      .then(response => response.json())
      .then(data => {
        this.setState({
          veterinarias: data
        });
      });
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
              <Input />
              <InputGroupAddon addonType="append">
                <InputGroupText>Here little icon</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <br />
            <Button
              color="success"
              size="s"
              style={{ margin: "0px 0px 20px 20px", height: "40px" }}
            >
              {" "}
              Buscar{" "}
            </Button>
            <div className="cardsdiv">
              <p>my card should be here!</p>
              {veterinarias.map(veterinaria => (
                <div className="showCards">
                  <Card className="selectedCard">
                    <CardImg
                      className="placeholder"
                      top
                      width="100%"
                      src={placeholder}
                      alt="Card image cap"
                    />
                    <CardBody className="selectedcardbody">
                      <CardTitle className="selectedTitle">
                        {/* {veterinaria.name} */}TITLE
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

                      <hr />
                      <Button className="selectedcardbutton">Button</Button>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <div>
            <LeafletMap veterinarias={veterinarias} />
          </div>
        </div>
      </>
    );
  }
}

export default Veterinaria;
