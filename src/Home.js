import React, { Component } from "react";
import Head from "./layout/hero";
import NewVetsCarousel from "./layout/vetscarousel";

class Home extends Component {
  render() {
    return (
      <div>
        <Head />
        <NewVetsCarousel />
      </div>
    );
  }
}

export default Home;
