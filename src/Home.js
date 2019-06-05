import React, { Component } from "react";
import Head from "./layout/hero";
import SimpleSlider from "./layout/vetscarousel";

class Home extends Component {
  render() {
    return (
      <div>
        <Head />
        <SimpleSlider />
      </div>
    );
  }
}

export default Home;
