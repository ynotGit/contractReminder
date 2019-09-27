import React, { Component } from "react";
import PropTypes from "prop-types";
import CountdownTimer from './CountdownTimer'

const deleteButtonStyle = {
  background: "red",
  padding: "5px"
};

class ContractItem extends Component {
  contractItemStyle = () => {
    return {
      textDecoration: this.props.contract.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, company, endDate } = this.props.contract;
    return (
      <div style={this.contractItemStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.toggleComplete.bind(this, id)}
          />
          {company}
          {endDate}
          <CountdownTimer />
          <button
            onClick={this.props.deleteContract.bind(this, id)}
            style={deleteButtonStyle}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

ContractItem.propTypes = {
  contract: PropTypes.object.isRequired
};

export default ContractItem;
