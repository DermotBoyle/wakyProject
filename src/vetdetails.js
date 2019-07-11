import React, { Component } from "react";
import qs from "qs";
import Veterinaria from "./veterinaria";
import "./vetdetails.css";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Container, Row, Col, Button } from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab, faStar, faStarHalf);

class Vetdetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      veterinarias: [],
      lat: 40.416775,
      lng: -3.70379,
      zoom: 13
    };
  }
  componentDidMount = () => {
    const query = qs.parse(window.location.search);
    const vetId = query["?q"] || "vMqq9vxjvZ";
    console.log(window.location.search, query);
    fetch("/api/veterinary?internalId=" + vetId) // "/api/veterinary?cp=" + e.target.value // dispaly in the map
      .then(response => response.json())
      .then(data => {
        this.setState({
          veterinarias: data
        });
      });
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
        {this.state.veterinarias.map(veterinaria => (
          <div className="head">
            <h1 className="vetdetailheader">{veterinaria.name}</h1>
            <p className="vetdetailaddress">
              {veterinaria.address},{veterinaria.cp},{veterinaria.city}
            </p>
          </div>
        ))}
        <div className="mainContainer">
          <div className="vetdetailMapWrapper">
            <Map center={position} zoom={this.state.zoom}>
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {this.state.veterinarias.map((veterinaria, index) => (
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
            <div className="infodetail">
              <div className="ratings">
                <Container className="pointContainer">
                  <Row className="pointRow">
                    <Col className="points">
                      <h2>4.5</h2>
                    </Col>
                    <Col className="pointsDetails">
                      <Row className="pointTitle">
                        Punctuacion del establecimiento
                      </Row>
                      <Row />
                      <Row>
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
                        <FontAwesomeIcon
                          icon="star-half"
                          style={{ color: "yellow" }}
                        />
                        10 opiniones
                      </Row>
                    </Col>
                  </Row>
                  <Container className="contactoWrapper">
                    <h2 className="contactoTitle">Contacto</h2>
                    <Row className="contactoContainer">
                      <Row className="rowContacto">
                        <Col className="Contacto" />
                      </Row>
                      {veterinarias.map(veterinaria => (
                        <Row className="tlf">
                          <Col>
                            <p className="tlfNames">
                              Telefono <br />
                              Telefono 24hr <br />
                              Email <br />
                              Web
                            </p>
                          </Col>
                          <Col>
                            <p className="tlfDetails">
                              {veterinaria.name} <br />
                              {veterinaria.phone} <br />
                              {veterinaria.email} <br />
                              {veterinaria.web}
                            </p>
                          </Col>
                        </Row>
                      ))}
                    </Row>
                  </Container>
                  {veterinarias.map(veterinaria => (
                    <div className="horarioContainer">
                      <h4 className="horarioTitle">Horario</h4>

                      <div className="horariodetails">
                        {veterinaria.scheduleString}
                      </div>
                    </div>
                  ))}
                  <Button className="pideCita">¡Pide Cita!</Button>
                  <p className="sugerircambios">Sugerir Cambios</p>
                </Container>
              </div>
            </div>
          </div>
        </div>

        <div className="descriptionContainer">
          <h4 className="vetdetaildescription">Descripcion</h4>
          {veterinarias.map(veterinaria => (
            <p className="vetdetaildescription">{veterinaria.description}</p>
          ))}
        </div>

        <div className="admitidasContainer">
          <h4 className="admitidasDescription">Mascotas Admitidas</h4>
          <Container className="admitidasContainer">
            <Row className="admitidasRow">
              <Col className="animalCol">
                <p className="tlfNames">
                  Perros <br />
                  Roedores
                  <br />
                </p>
              </Col>
              <Col className="aniamlCol">
                <p className="tlfDetails">
                  Gatos <br />
                  Pajaros <br />
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="especialidadesContainer">
          <h4 className="especialidadesDescription">Especialidades</h4>
          <Container className="especialidadesContainer">
            <Row className="especialidadesRow">
              <Col className="especialidadesCol">
                <p className="especialidadesNames">
                  Urgencias 24hr <br />
                  Analisis Clinico
                  <br />
                  Laboratorio <br />
                  Cardiologia
                </p>
              </Col>
              <Col className="especialidadesCol">
                <p className="especialidadesNames">
                  Peluqueria <br />
                  Diagnostico por Imagen <br />
                  Hospitalizacion <br />
                  Cirugia <br />
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="infodetail">
          <h3 className="opinionesTitle">Opiniones</h3>
          <div
            className="ratingsLower"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.25) -2px 7px 3px -2px",
              width: "36em"
            }}
          >
            <Container className="pointContainer">
              <Row className="pointRow">
                <Col className="points">
                  <h2 style={{ fontSize: "40px" }}>4.5</h2>
                </Col>
                <Col className="pointsDetails" style={{ paddingLeft: "6PX" }}>
                  <Row
                    className="pointTitle"
                    style={{
                      color: "black",
                      fontSize: "20px",
                      width: "max-content"
                    }}
                  >
                    Punctuacion del establecimiento
                  </Row>
                  <Row />
                  <Row>
                    <FontAwesomeIcon icon="star" style={{ color: "yellow" }} />
                    <FontAwesomeIcon icon="star" style={{ color: "yellow" }} />
                    <FontAwesomeIcon icon="star" style={{ color: "yellow" }} />
                    <FontAwesomeIcon
                      icon="star"
                      style={{ color: "yellow" }}
                    />{" "}
                    <FontAwesomeIcon
                      icon="star-half"
                      style={{ color: "yellow" }}
                    />
                    Basado en 10 opiniones
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div className="reviewContainer">
          <p className="commentRating">
            Trató inmejorable con mi perro y profesionalidad también
            inmejorable. Recomiendo esta clínica veterinaria.
          </p>
          <div className="reviewUser">
            <p className="userName">Maria Sanchez &nbsp; </p>
            <p ClassName="verifiedUser">yes &nbsp; </p>
            <p className="userTimeOfComment">hace 3 dias</p>
          </div>
        </div>

        <div className="reviewContainer">
          <p className="commentRating">
            Unos profesionales de categoría. Hay veterinarios que miran el
            dinero antes que la salud del animal, da gusto ver qué hay clínicas
            que no son así. Recomendable para el cuidado de vuestros amigos
            peludos
          </p>
          <div className="reviewUser">
            <p className="userName">Jose Leon &nbsp; </p>
            <p ClassName="verifiedUser">yes &nbsp; </p>
            <p className="userTimeOfComment">hace un mes</p>
          </div>
        </div>
      </>
    );
  }
}

export default Vetdetails;
