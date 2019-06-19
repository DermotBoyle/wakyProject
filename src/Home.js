import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Head from "./layout/hero";
import NewVetsCarousel from "./layout/vetscarousel";
import Blog from "./layout/blog";

class Home extends Component {
  render() {
    return (
      <div>
        <Head />
        <NewVetsCarousel />
        <Blog />
      </div>
    );
  }
}

export default Home;
