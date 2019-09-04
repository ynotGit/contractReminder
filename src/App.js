import React, { Component } from 'react';
import Contracts from './components/Contracts';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer'
import AddContract from './components/AddContract';

class App extends Component {
  state = {
    contracts: [
      { id: 1, company: 'Sky', endDate: '01-01-2020', completed: false },
      { id: 2, company: 'EE', endDate: '02-01-2020', completed: false }
    ]
  };

  toggleComplete = id => {
    this.setState({
      contracts: this.state.contracts.map(contract => {
        if (contract.id === id) {
          contract.completed = !contract.completed;
        }
        return contract;
      })
    });
  };

  deleteContract = id => {
    this.setState({
      contracts: [
        ...this.state.contracts.filter(contract => contract.id !== id)
      ]
    });
  };

  addContract = (company) => {
    const newContract = {
      id: //setId ,
        company,
      completed: false
    }
    this.setState({
      contracts: [...this.state.contracts, newContract]
    })
  }

  render() {
    return (
      <div className='App' >
        <div className="container">
          <Header />
          <AddContract addContract={this.addContract} />
          <Contracts
            contracts={this.state.contracts}
            toggleComplete={this.toggleComplete}
            deleteContract={this.deleteContract}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
