import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Head from "./homepage/hero";
import NewVetsCarousel from "./homepage/vetscarousel";
import Blog from "./homepage/blog";

class Home extends Component {
  render() {
    return (
      <div>
        <Head />
        <h2 className="newvets">Nuevas veterinarias</h2>
        <NewVetsCarousel />
        <Blog />
      </div>
    );
  }
}

export default Home;
