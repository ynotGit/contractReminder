import React, { Component } from "react";
import PropTypes from "prop-types";

class ContractItem extends Component {
  contractItemStyle = () => {
    return {
      textDecoration: this.props.contract.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, company } = this.props.contract;
    return (
      <div style={this.contractItemStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {company}
        </p>
      </div>
    );
  }
}

ContractItem.propTypes = {
  contract: PropTypes.object.isRequired
};

export default ContractItem;
