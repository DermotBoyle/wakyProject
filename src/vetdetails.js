import React, { Component } from "react";
import qs from "qs";
import Veterinaria from "./veterinaria";

const urlRoot = window.location.href.includes("localhost")
  ? "http://localhost:3001"
  : "";

class Vetdetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      veterinarias: []
    };
  }
  componentDidMount = () => {
    const query = qs.parse(window.location.search);
    const vetId = query["?q"] || "X8hmjkxNZn";
    console.log(window.location.search, query);
    fetch(urlRoot + "/api/veterinary?internalId=" + vetId) // "/api/veterinary?cp=" + e.target.value // dispaly in the map
      .then(response => response.json())
      .then(data => {
        this.setState({
          veterinarias: data
        });
      });
  };

  render() {
    console.log(this.state.veterinarias);
    return (
      <>
        {this.state.veterinarias.map(veterinaria => (
          <div>
            <h1>{veterinaria.name}</h1>
            <h4>{veterinaria.cp}</h4>
            <h4>{veterinaria.description}</h4>
          </div>
        ))}
      </>
    );
  }
}

export default Vetdetails;
