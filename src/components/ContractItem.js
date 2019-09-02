import React, { Component } from "react";

class ContractItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.contract.company}</p>
        <p>{this.props.contract.endDate}</p>
      </div>
    );
  }
}

export default ContractItem;
