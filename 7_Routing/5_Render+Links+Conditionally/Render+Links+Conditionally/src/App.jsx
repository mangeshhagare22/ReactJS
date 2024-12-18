import React, { Component } from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import CustomersList from "./CustomersList";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import NoMatchPage from "./NoMatchPage";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  render() {
    return (
      <BrowserRouter>
        <NavBar isLoggedIn={this.state.isLoggedIn} />
        <div className="container-fluid">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/customers" exact component={CustomersList} />
            <Route path="/cart" exact component={ShoppingCart} />
            <Route path="*" component={NoMatchPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
