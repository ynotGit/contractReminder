import React, { Component } from "react";
import PropTypes from "prop-types";

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
        </p>
      </div>
    );
  }
}

ContractItem.propTypes = {
  contract: PropTypes.object.isRequired
};

export default ContractItem;
