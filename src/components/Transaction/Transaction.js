import React from "react";

import SingleTransaction from "./SingleTransaction";
const Transaction = () => {
  return (
    <>
      <p className="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>
          <SingleTransaction></SingleTransaction>
        </ul>
      </div>
    </>
  );
};

export default Transaction;
