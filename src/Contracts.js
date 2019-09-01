import React from "react";

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

export default Contracts;
