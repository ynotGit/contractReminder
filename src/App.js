import React, { Component } from "react";
import Contracts from "./components/Contracts";
import "./App.css";

class App extends Component {
  state = {
    contracts: [
      { id: 1, company: "Sky", endDate: "01-01-2020", completed: false },
      { id: 2, company: "EE", endDate: "02-01-2020", completed: false }
    ]
  };

  markComplete = (id) => {
    console.log(id);
  };

  render() {
    return (
      <div className="App">
        <h1>Contract Reminder</h1>
        <Contracts
          contracts={this.state.contracts}
          markComplete={this.markComplete}
        />
      </div>
    );
  }
}

export default App;
