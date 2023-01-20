import React from "react";
import editImg from "../../assets/images/edit.svg";
import deleteImg from "../../assets/images/delete.svg";
const SingleTransaction = () => {
  return (
    <li class="transaction income">
      <p>Earned this month</p>
      <div class="right">
        <p>৳ 100</p>
        <button class="link">
          <img class="icon" alt="" src={editImg} />
        </button>
        <button class="link">
          <img class="icon" alt="" src={deleteImg} />
        </button>
      </div>
    </li>
  );
};

export default SingleTransaction;
