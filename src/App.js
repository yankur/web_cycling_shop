import React, { Component } from "react";
import './index.css'

import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import PageNF from "./components/PageNF";

import './fonts/HelveticaNeuBold.ttf'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
              <NavBar />
                <Switch>
                  <Route exact path="/" component={ProductPage} />
                  <Route path="/cart" component={Cart} />
                  <Route component={PageNF} />
                </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;