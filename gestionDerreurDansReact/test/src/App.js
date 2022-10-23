import React, { Component } from "react";
import "./App.css";
import Frieza from "./components/Frieza";
import Goku from "./components/Goku";
import Vegeta from "./components/Vegeta";
import ErrorBoundary from "./components/ErrorBoundary";

class App extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>Cliquez sur les gentils</h1>
        <div className="row">
          <ErrorBoundary>
            <Vegeta />
          </ErrorBoundary>
          <ErrorBoundary>
            <Goku />
          </ErrorBoundary>
          <ErrorBoundary>
            <Frieza />
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}

export default App;
