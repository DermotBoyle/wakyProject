import React, { Component, Fragment } from "react";
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

//import urlRoot from "./urlRoot.js"
const urlRoot = window.location.href.indexOf("localhost")
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
    fetch(urlRoot + "/api/veterinary") // "/api/veterinary?cp=" + e.target.value
      .then(response => response.json())
      .then(data => {
        this.setState({
          veterinarias: data
        });
      });
  };
  /*
  nextVeterinaria = () => {
    const newIndex = this.state.veterinaria.index + 1;
    this.setState({
      veterinaria: data.veterinarias[newIndex]
    });
  };

  prevVeterinaria = () => {
    const newIndex = this.state.veterinaria.index - 1;
    this.setState({
      veterinaria: data.veterinarias[newIndex]
    });
  }; */

  render() {
    const veterinarias = this.state.veterinarias || [];

    return (
      <Fragment>
        <div>
          <h2 className="newvets">Nuevas veterinarias</h2>
        </div>
        <div className="carousel">
          <div className="col">
            <div className={`cards-slider active-slide-${veterinarias.name}`}>
              {veterinarias.map(veterinaria => (
                <>
                  <div className="cards-slider">
                    <div className="cards-slider-wrapper">
                      <Card className="vetscarousel">
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
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NewVetsCarousel;
