import React from "react";
import {
  Jumbotron,
  Container,
  InputGroup,
  InputGroupAddon,
  Input,
  Button
} from "reactstrap";
import "./jumbotron.css";
import Script from 'react-load-script';

class Head extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };

    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
  }

  handleScriptLoad() {
    console.log("handleScriptLoad()");
    // Declare Options For Autocomplete
    var options = {
      types: ['address'],
      componentRestrictions: {country: "es"}
    };


    // Initialize Google Autocomplete
    /* global = google */// To disable any eslint 'google not defined' errors
    if (google && google.maps) {
      this.autocomplete = new google.maps.places.Autocomplete(
          document.getElementById('autocomplete'),
          options,
      );
      this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
      console.log("ya hemos cargado google.maps.places.Autocomplete");
    }
  }

  handlePlaceSelect() {

    // Extract City From Address Object
    let place = this.autocomplete.getPlace();
    console.log({place});
    let address = place.address_components;
    let lat = place.geometry && place.geometry.location && place.geometry.location.lat();
    let lng = place.geometry && place.geometry.location && place.geometry.location.lng();

    if (lat && lng) {
      window.location.href = `/veterinaria?lat=${lat}&long=${lng}`;
    }
    else if (address) {
      window.location.href = "/veterinaria?q=" + address.pop().long_name;
    }
  }
  addressInput = e => {
    this.setState({ input: e.target.value });
  };

  onButtonSubmit = () => {
    window.location.href = "/veterinaria?q=" + this.state.input;
  };

  keyPressed = event => {
    if (event.key === "Enter") {
      window.location.href = "/veterinaria?q=" + this.state.input;
    }
  };

  render() {
    return (
      <div>
        <Jumbotron fluid>
          <div className="overLay">
            <Container className="cont" fluid>
              <p className="display-3">Encuentra tu veterinaria ideal</p>
              <p className="lead">
                Descubre las mejores veterinarias cerca de ti
              </p>
              <Script
                  url="https://maps.googleapis.com/maps/api/js?key=AIzaSyAHWF4S03V4kODAXed5C81Ka5j25u5Wu-4&libraries=places"
                  onLoad={this.handleScriptLoad}
              />
              <InputGroup className="homeInput">
                <Input id="autocomplete"
                  className="vetsearch"
                  placeholder="Calle,Barrio o CP"
                  value={this.state.input}
                 onChange={this.addressInput}
                  onKeyPress={this.keyPressed}
                />
                <Button className="danger" onClick={this.onButtonSubmit}>
                  Buscar
                </Button>
              </InputGroup>
            </Container>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Head;
