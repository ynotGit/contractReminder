import React, { Component } from "react";
import Contracts from "./Contracts";
import "./App.css";

class App extends Component {
  state = {
    contracts: [
      { id: 1, contract: "Sky", endDate: "01-01-2020" },
      { id: 2, contract: "EE", endDate: "02-01-2020" }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Contract Reminder</h1>
        <Contracts contracts={this.state.contracts} />
      </div>
    );
  }
}

export default App;
