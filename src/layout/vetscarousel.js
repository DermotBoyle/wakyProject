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
import { string } from "prop-types";

//import urlRoot from "./urlRoot.js"
const urlRoot = window.location.href.indexOf("localhost")
  ? "http://localhost:3001"
  : "";

class NewVetsCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      veterinarias: [],
      activeIndex: { activeIndex: 0 }
    };
  }

  componentDidMount = () => {
    fetch(urlRoot + "/api/veterinary") // "/api/veterinary?cp=" + e.target.value
      .then(response => response.json())
      .then(data => {
        this.setState({
          veterinarias: data
        });
      });
  };

  parseDate = () => {
    if (typeof this.state.veterinarias.updatedAt === string) {
      var dateStr = JSON.parse(this.state.veterinarias.updatedAt);
      var sortDate = dateStr.sort(function(a, b) {
        a = new Date(a.dateStr);
        b = new Date(b.dateStr);
        return a > b ? -1 : a < b ? 1 : 0;
      });
      console.log(sortDate);
    }
  };

  next = () => {
    const nextIndex =
      this.state.activeIndex === this.state.veterinarias.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({
      activeIndex: nextIndex
    });
    console.log(this.state.nextIndex);
  };

  previous = () => {
    const newIndex = this.state.veterinarias.length;
    this.setState({
      veterinaria: [newIndex]
    });
    console.log([newIndex]);
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

    const activeIndex = this.state;
    return (
      <Fragment>
        <div className="container1">
          <h2 className="newvets">Nuevas veterinarias</h2>
          <div className="linecont">
            <hr className="newvetline" />
          </div>
          <div className="SliderContainer">
            <Slider {...settings}>
              <div>
                <div className="cards-slider">
                  {veterinariasSortedByDate.slice(0, 3).map(veterinaria => (
                    <div className="card-slider">
                      <Card
                        className="vetscarousel"
                        key={veterinaria.length}
                        activeIndex={activeIndex}
                      >
                        <CardImg
                          className="placeholder"
                          top
                          width="100%"
                          src={placeholder}
                          alt="Card image cap"
                        />
                        <CardBody className="vetcarobody">
                          <CardTitle className="vetname">
                            {veterinaria.name}
                          </CardTitle>
                          <p className="vetupdate">{veterinaria.updatedAt}</p>
                          <hr />
                          <CardSubtitle className="vetcp">
                            CP :{veterinaria.cp}
                          </CardSubtitle>
                          <CardText>
                            <a href={veterinaria.web}>Website</a>
                          </CardText>

                          <hr />
                          <Button className="vetcarobutton">Button</Button>
                        </CardBody>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="cards-slider">
                  {veterinariasSortedByDate.slice(4, 7).map(veterinaria => (
                    <div className="card-slider">
                      <Card
                        className="vetscarousel"
                        key={veterinaria.length}
                        activeIndex={activeIndex}
                      >
                        <CardImg
                          className="placeholder"
                          top
                          width="100%"
                          src={placeholder}
                          alt="Card image cap"
                        />
                        <CardBody className="vetcarobody">
                          <CardTitle className="vetname">
                            {veterinaria.name}
                          </CardTitle>
                          <p className="vetupdate">{veterinaria.updatedAt}</p>
                          <hr />
                          <CardSubtitle className="vetcp">
                            CP :{veterinaria.cp}
                          </CardSubtitle>
                          <CardText>
                            <a href={veterinaria.web}>Website</a>
                          </CardText>

                          <hr />
                          <Button className="vetcarobutton">Button</Button>
                        </CardBody>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div>
                  <div className="cards-slider">
                    {veterinariasSortedByDate.slice(7, 10).map(veterinaria => (
                      <div className="card-slider">
                        <Card
                          className="vetscarousel"
                          key={veterinaria.length}
                          activeIndex={activeIndex}
                        >
                          <CardImg
                            className="placeholder"
                            top
                            width="100%"
                            src={placeholder}
                            alt="Card image cap"
                          />
                          <CardBody className="vetcarobody">
                            <CardTitle className="vetname">
                              {veterinaria.name}
                            </CardTitle>
                            <p className="vetupdate">{veterinaria.updatedAt}</p>
                            <hr />
                            <CardSubtitle className="vetcp">
                              CP :{veterinaria.cp}
                            </CardSubtitle>
                            <CardText>
                              <a href={veterinaria.web}>Website</a>
                            </CardText>

                            <hr />
                            <Button className="vetcarobutton">Button</Button>
                          </CardBody>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="cards-slider">
                    {veterinariasSortedByDate.slice(10, 13).map(veterinaria => (
                      <div className="card-slider">
                        <Card
                          className="vetscarousel"
                          key={veterinaria.length}
                          activeIndex={activeIndex}
                        >
                          <CardImg
                            className="placeholder"
                            top
                            width="100%"
                            src={placeholder}
                            alt="Card image cap"
                          />
                          <CardBody className="vetcarobody">
                            <CardTitle className="vetname">
                              {veterinaria.name}
                            </CardTitle>
                            <p className="vetupdate">{veterinaria.updatedAt}</p>
                            <hr />
                            <CardSubtitle className="vetcp">
                              CP :{veterinaria.cp}
                            </CardSubtitle>
                            <CardText>
                              <a href={veterinaria.web}>Website</a>
                            </CardText>

                            <hr />
                            <Button className="vetcarobutton">Button</Button>
                          </CardBody>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NewVetsCarousel;
