import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import Veterinaria from "./veterinaria";

class LeafletMap extends Component {
  constructor(props) {
    super(props);
    this.state = { lat: 40.416775, lng: -3.70379, zoom: 13 };
  }

  render() {
    const veterinarias = this.props.veterinarias;
    const position = [this.state.lat, this.state.lng];
    if (veterinarias && veterinarias[0]) {
      position[0] = veterinarias[0].geolocation.latitude;
      position[1] = veterinarias[0].geolocation.longitude;
    }
    console.log(veterinarias);
    /*const markers = [
      {
        position: position,
        popup: "name of veterinaria"
      }
    ];*/

    return (
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
    );
  }
}

export default LeafletMap;
