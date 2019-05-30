import React from "react";
import "./App.css";
import NavBar from "./layout/navbar";
import Veterinarias from "./veterinarias"
import Footer from "./layout/footer";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from "./Home.js";
import Veterinaria from "./veterinaria";
import Contacto from "./Contacto";

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
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
