import React from "react";
import PropTypes from "prop-types";

const Contracts = ({ contracts }) => {
  const contractsList = contracts.length ? (
    contracts.map((contract) => {
      return (
        <div key={contract.id}>
          <span>{contract.company}</span>
          <span>{contract.endDate}</span>
        </div>
      );
    })
  ) : (
    <p className="noContracts">You have no contracts</p>
  );
  return <div className="contracts">{contractsList}</div>;
};

Contracts.propTypes = {
  contracts: PropTypes.array.isRequired
};

export default Contracts;
