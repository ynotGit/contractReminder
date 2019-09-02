import React, { Component } from "react";
import ContractItem from "./ContractItem";
import PropTypes from "prop-types";

class Contracts extends Component {
  render() {
    return this.props.contracts.map((contract) => (
      <ContractItem key={contract.id} contract={contract} />
    ));
  }
}

Contracts.propTypes = {
  contracts: PropTypes.array.isRequired
};

export default Contracts;
