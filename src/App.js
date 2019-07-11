import React from "react";
import "./App.css";
import NavBar from "./homepage/navbar";
import Footer from "./homepage/footer";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Home.js";
import Veterinaria from "./veterinaria";
import Contacto from "./Contacto";
import Vetdetails from "./vetdetails";
function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/veterinaria" component={Veterinaria} />
            <Route exact path="/contacto" component={Contacto} />
            <Route exact path="/details" component={Vetdetails} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
