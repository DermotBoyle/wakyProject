import React from "react";
import "./App.css";
import NavBar from "./homepage/navbar";
import Footer from "./homepage/footer";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Home.js";
import Veterinaria from "./veterinaria";
import Contacto from "./Contacto";
import Vetdetails from "./vetdetails";

class App extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      user: undefined
    };
    fetch("/api/user/me")
      .then(r => r.json())
      .then(user => this.setState({ user }));
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <NavBar user={this.state.user} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/veterinaria" component={Veterinaria} />
              <Route exact path="/contacto" component={Contacto} />
              <Route
                exact
                path="/details"
                /*render={props => (
                  <Vetdetails {...props} user={this.props.user} />
                )}*/ component={
                  Vetdetails
                }
              />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
