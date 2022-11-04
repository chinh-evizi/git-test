import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./pages/Login";
import { Route } from "react-router";
import {BrowserRouter , Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"}>
              <Login />
            </Route>
            <Route exact path={"/dashboard"}>
              <Dashboard />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
