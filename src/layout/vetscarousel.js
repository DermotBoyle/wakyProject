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
import placeholder from "../images/placeholder.png";
import "./vetcarousel.css";
import Veterinaria from "../veterinaria";

//import urlRoot from "./urlRoot.js"
const urlRoot = window.location.href.includes("localhost")
  ? "http://localhost:3001"
  : "";

class NewVetsCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      veterinarias: []
    };
  }

  componentDidMount = () => {
    fetch(urlRoot + "/api/veterinary") // "/api/veterinary?cp=" + e.target.value // dispaly in the map
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
    const veterinariasSortedByDate = veterinarias.sort(function compare(a, b) {
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
              {veterinariasSortedByDate.slice(0, 3).map(veterinaria => (
                <Card className="vetscarousel" style={{ width: "20em" }}>
                  <CardImg
                    className="placeholder"
                    top
                    src={placeholder}
                    alt="Card image cap"
                  />
                  <CardBody className="vetcarobody">
                    <CardTitle className="vetname">
                      <a>{Veterinaria.name}</a>
                    </CardTitle>
                    <p className="vetupdate">date here</p>

                    <CardSubtitle className="vetcp">
                      {veterinaria.cp}
                    </CardSubtitle>
                    <CardText />
                  </CardBody>
                </Card>
              ))}
            </div>
            <div className="sliderWrapper">
              {veterinariasSortedByDate.slice(0, 3).map(veterinaria => (
                <Card className="vetscarousel" style={{ width: "20em" }}>
                  <CardImg
                    className="placeholder"
                    top
                    src={placeholder}
                    alt="Card image cap"
                  />
                  <CardBody className="vetcarobody">
                    <CardTitle className="vetname">
                      <a>{veterinaria.name}</a>
                    </CardTitle>
                    <p className="vetupdate">{veterinaria.updatedAt}</p>
                    <hr />
                    <CardSubtitle className="vetcp">
                      {veterinaria.cp}
                    </CardSubtitle>
                    <CardText />
                  </CardBody>
                </Card>
              ))}
            </div>
          </Slider>
        </span>
      </div>
    );
  }
}

export default NewVetsCarousel;
