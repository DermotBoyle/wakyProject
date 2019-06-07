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
        <div className="carousel">
          {/* <button
            onClick={() => this.nextVeterinaria()}
            disabled={veterinaria.index === data.veterinarias.length - 1}
        > 
            Next
          </button>

          <button
            onClick={() => this.prevVeterinaria()}
            disabled={veterinaria.index === 0}
          >
            Prev
          </button> */}
        </div>

        <div className="page">
          <div className="cardWrapper">
            {veterinarias.map(veterinaria => (
              <>
                <div>
                  <div>
                    <Card>
                      <CardImg
                        className="placeholder"
                        top
                        width="100%"
                        src={placeholder}
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardTitle>{veterinaria.name}</CardTitle>
                        <CardSubtitle>Loca to you!</CardSubtitle>
                        <CardText>{veterinaria.description}</CardText>
                        <Button>Button</Button>
                      </CardBody>
                    </Card>
                  </div>
                  {/* <Button
                    onClick={() => this.favourite(movie.id)}
                    color="danger"
                  >
                    Favourie
                  </Button> */}
                </div>
              </>
            ))}
            <div className="cardSlider">
              {/* <Card verterinaria={vetcard} /> */}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NewVetsCarousel;
