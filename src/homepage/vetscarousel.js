import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import vetClinic from "../images/vetClinic.jpg";
import "./vetcarousel.css";
import Moment from "react-moment";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMapMarker, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faMapMarker, faStar);

class NewVetsCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      veterinarias: []
    };
  }

  componentDidMount = () => {
    fetch("/api/veterinary") // "/api/veterinary?cp=" + e.target.value // dispaly in the map
      .then(response => response.json())
      .then(data => {
        this.setState({
          veterinarias: data
        });
        console.log(data);
      });
  };

  render() {
    const veterinarias = this.state.veterinarias || [];
    const veterinariasSortedByDate = veterinarias
      .slice(0, 100)
      .sort(function compare(a, b) {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });

    var settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      // carousel 1

      <>
        <div
          className="containerCarousel"
          style={{
            display: "block",
            minHeight: "0",
            minWidth: "0",
            textAlign: "-webkit-center"
          }}
        >
          {" "}
          <span>
            <Slider {...settings}>
              <div className="sliderWrapper">
                {veterinariasSortedByDate.slice(0, 4).map(veterinaria => (
                  <Card className="vetscarousel" style={{ width: "20em" }}>
                    <CardImg
                      className="placeholder"
                      top
                      src={vetClinic}
                      alt="Card image cap"
                    />
                    <CardBody className="vetcarobody">
                      <CardTitle className="vetname">
                        <p>
                          <a
                            onClick={() =>
                              (window.location.href = `/details?q=${
                                veterinaria.objectId
                              }`)
                            }
                            href="#"
                          >
                            {veterinaria.name}
                          </a>
                        </p>
                      </CardTitle>
                      <p className="vetupdate">
                        {" "}
                        last updated &nbsp;
                        <Moment fromNow>{veterinaria.updatedAt}</Moment>
                      </p>

                      <CardSubtitle className="vetcp">
                        <p>
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
                      </CardSubtitle>
                      <CardText />
                    </CardBody>
                  </Card>
                ))}
              </div>
              <div className="sliderWrapper">
                {veterinariasSortedByDate.slice(5, 9).map(veterinaria => (
                  <Card className="vetscarousel" style={{ width: "20em" }}>
                    <CardImg
                      className="placeholder"
                      top
                      src={vetClinic}
                      alt="Card image cap"
                    />
                    <CardBody className="vetcarobody">
                      <CardTitle className="vetname">
                        <a
                          onClick={() =>
                            (window.location.href = `/details?q=${
                              veterinaria.objectId
                            }`)
                          }
                          href="#"
                        />
                      </CardTitle>
                      <p className="vetupdate">
                        last updated &nbsp;
                        <Moment fromNow>{veterinaria.updatedAt}</Moment>
                      </p>
                      <hr />
                      <CardSubtitle className="vetcp">
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
                      </CardSubtitle>
                      <CardText />
                    </CardBody>
                  </Card>
                ))}
              </div>
            </Slider>
          </span>
        </div>

        {/* carousel2 */}
        <div
          className="containerCarouselTwo"
          style={{
            display: "block",
            minHeight: "0",
            minWidth: "0",
            textAlign: "-webkit-center"
          }}
        >
          {" "}
          <span>
            <Slider {...settings}>
              <div className="sliderWrapper">
                {veterinariasSortedByDate.slice(0, 1).map(veterinaria => (
                  <Card className="vetscarousel" style={{ width: "20em" }}>
                    <CardImg
                      className="placeholder"
                      top
                      src={vetClinic}
                      alt="Card image cap"
                    />
                    <CardBody className="vetcarobody">
                      <CardTitle className="vetname">
                        <p>{veterinaria.name}</p>
                      </CardTitle>
                      <p className="vetupdate">
                        {" "}
                        last updated &nbsp;
                        <Moment fromNow>{veterinaria.updatedAt}</Moment>
                      </p>

                      <CardSubtitle className="vetcp">
                        <p>
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
                      </CardSubtitle>
                      <CardText />
                    </CardBody>
                  </Card>
                ))}
              </div>
              <div className="sliderWrapper">
                {veterinariasSortedByDate.slice(1, 2).map(veterinaria => (
                  <Card className="vetscarousel" style={{ width: "20em" }}>
                    <CardImg
                      className="placeholder"
                      top
                      src={vetClinic}
                      alt="Card image cap"
                    />
                    <CardBody className="vetcarobody">
                      <CardTitle className="vetname">
                        <a>{veterinaria.name}</a>
                      </CardTitle>
                      <p className="vetupdate">{veterinaria.updatedAt}</p>
                      <hr />
                      <CardSubtitle className="vetcp">
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
                      </CardSubtitle>
                      <CardText />
                    </CardBody>
                  </Card>
                ))}
              </div>
            </Slider>
          </span>
        </div>
      </>
    );
  }
}

export default NewVetsCarousel;
