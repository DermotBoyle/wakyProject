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
import vetClinic from "./images/vetClinic.jpg";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import qs from "qs";
import "./veterinaria.css";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import {
  faSearch,
  faMapMarker,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faSearch, faMapMarker, faStar);

class Veterinaria extends Component {
  constructor() {
    super();
    this.state = { veterinarias: [], lat: 40.416775, lng: -3.70379, zoom: 13 };
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
    const veterinarias = this.state.veterinarias;
    const position = [this.state.lat, this.state.lng];
    if (veterinarias && veterinarias[0]) {
      position[0] = veterinarias[0].geolocation.latitude;
      position[1] = veterinarias[0].geolocation.longitude;
    }

    return (
      <>
        <div className="columnResponse">
          <div className="flex-column">
            {veterinarias.slice(0, 1).map(veterinaria => (
              <div>
                <h3
                  style={{
                    fontFamily: "Open Sans, sans-serif",
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "#6b6e7f",
                    textAlign: "left",
                    margin: "30px 0px 20px 20px",
                    marginLeft: "4em"
                  }}
                >
                  Veterinarias en &nbsp;
                  <span style={{ fontSize: "25px", color: "#4496ae" }}>
                    {veterinaria.city}
                  </span>
                </h3>
                <hr />
                <p
                  style={{
                    fontFamily: "Open Sans, sans-serif",
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "#6b6e7f",
                    textAlign: "left",
                    margin: "30px 0px 0px 20px",
                    marginLeft: "8em"
                  }}
                >
                  Introduce la direccion
                </p>
              </div>
            ))}
            <InputGroup
              style={{
                margin: "10px 0px 0px 10px",
                marginLeft: "6em"
              }}
            >
              <Input
                onChange={this.addressInput}
                onKeyPress={this.keyPressed}
              />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <FontAwesomeIcon icon="search" style={{ color: "white" }} />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <br />
            <Button
              color="success"
              size="s"
              style={{
                margin: "0px 0px 20px 20px",
                marginLeft: "8em",
                height: "40px",
                color: "#f9f9f9"
              }}
              onClick={this.onButtonSubmit}
            >
              {" "}
              Buscar{" "}
            </Button>
          </div>
          <div className="background">
            <Container
              className="mapVetContainer"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Row>
                <Col className="mapVetCol">
                  <div className="cardsdiv">
                    {veterinarias.map(veterinaria => (
                      <div className="showCards">
                        <Card className="selectedCard">
                          <CardImg
                            className="vetimg"
                            top
                            width="auto"
                            src={vetClinic}
                            alt="Card image cap"
                          />
                          <CardBody className="selectedcardbody">
                            <CardTitle
                              className="selectedTitle"
                              style={{
                                color: "#4496ae",
                                fontSize: "18px",
                                fontWeight: "600"
                              }}
                            >
                              {veterinaria.name}
                            </CardTitle>
                            <p className="selectedUpdated">
                              <p>
                                {" "}
                                <FontAwesomeIcon
                                  icon="star"
                                  style={{ color: "yellow" }}
                                />
                                <FontAwesomeIcon
                                  icon="star"
                                  style={{ color: "yellow" }}
                                />
                                <FontAwesomeIcon
                                  icon="star"
                                  style={{ color: "yellow" }}
                                />
                                <FontAwesomeIcon
                                  icon="star"
                                  style={{ color: "yellow" }}
                                />
                              </p>
                              <FontAwesomeIcon id="mapmark" icon="map-marker" />{" "}
                              {veterinaria.address}
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
                </Col>
                <Col
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "1em"
                  }}
                >
                  <div className="mapVetContainer" />
                  <Map center={position} zoom={this.state.zoom}>
                    <TileLayer
                      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {veterinarias.map((veterinaria, index) => (
                      <Marker
                        position={[
                          veterinaria.geolocation.latitude,
                          veterinaria.geolocation.longitude
                        ]}
                        key={index}
                      >
                        <Popup>
                          <a
                            onClick={() =>
                              (window.location.href = `/details?q=${
                                veterinaria.internalId
                              }`)
                            }
                            href="#"
                          >
                            {veterinaria.name}
                          </a>
                        </Popup>
                      </Marker>
                    ))}
                  </Map>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
    );
  }
}

export default Veterinaria;
