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

  toggleComplete = (id) => {
    this.setState({
      contracts: this.state.contracts.map((contract) => {
        if (contract.id === id) {
          contract.completed = !contract.completed;
        }
        return contract;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Contract Reminder</h1>
        <Contracts
          contracts={this.state.contracts}
          toggleComplete={this.toggleComplete}
        />
      </div>
    );
  }
}

export default App;
