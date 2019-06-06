import React, { Component } from "react";
import "./vetcarousel.css";
import Slider from "react-slick";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from "reactstrap";

import placeholder from "../images/placeholder.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <>
        <article className="carouselcont">
          <h2 className="newvets">Nuevas Veterinarias</h2>
          <div className="linecont">
            <hr className="linedetail" />
          </div>
          <div className="slider">
            <Slider {...settings}>
              <div className="carsearch">
                <Card>
                  <img width="50%" src={placeholder} alt="Card image cap" />
                  <CardBody>
                    <hr />
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <CardLink href="#">Card Link</CardLink>
                    <CardLink href="#">Another Link</CardLink>
                  </CardBody>
                </Card>
              </div>
              <div>
                <Card>
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                  </CardBody>
                  <img width="50%" src={placeholder} alt="Card image cap" />
                  <CardBody>
                    <hr />
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <CardLink href="#">Card Link</CardLink>
                    <CardLink href="#">Another Link</CardLink>
                  </CardBody>
                </Card>
              </div>
              <div>
                <Card>
                  <CardBody />
                  <img width="100%" src={placeholder} alt="Card image cap" />
                  <CardBody>
                    <hr />
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <CardLink href="#">Card Link</CardLink>
                    <CardLink href="#">Another Link</CardLink>
                  </CardBody>
                </Card>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          </div>
        </article>
      </>
    );
  }
}
