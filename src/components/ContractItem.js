import React, { Component } from "react";
import PropTypes from "prop-types";

class ContractItem extends Component {
  contractItemStyle = () => {
    return {
      textDecoration: this.props.contract.completed ? "line-through" : "none"
    };
  };
  render() {
    return (
      <div style={this.contractItemStyle()}>
        <p>{this.props.contract.company}</p>
        <p>{this.props.contract.endDate}</p>
      </div>
    );
  }
}

ContractItem.propTypes = {
  contract: PropTypes.object.isRequired
};

export default ContractItem;
