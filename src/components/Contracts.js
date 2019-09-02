import React, { Component } from "react";
import ContractItem from "./ContractItem";

class Contracts extends Component {
  render() {
    return this.props.contracts.map((contract) => (
      <ContractItem contract={contract} />
    ));
  }
}

export default Contracts;
