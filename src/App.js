import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Movie from "./Movie";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Movie />
        </div>
      </div>
    );
  }
}

export default App;
