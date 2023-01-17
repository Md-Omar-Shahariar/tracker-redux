import React from "react";

import SingleTransaction from "./SingleTransaction";
const Transaction = () => {
  return (
    <>
      <p class="second_heading">Your Transactions:</p>

      <div class="conatiner_of_list_of_transactions">
        <ul>
          <SingleTransaction></SingleTransaction>
        </ul>
      </div>
    </>
  );
};

export default Transaction;
