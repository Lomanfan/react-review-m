import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Customers from "./components/customers";
import LoginForm from "./components/loginForm";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import Rentals from "./components/rentals";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
