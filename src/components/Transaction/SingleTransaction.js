import React from "react";
import editImg from "../../assets/images/edit.svg";
import deleteImg from "../../assets/images/delete.svg";
const SingleTransaction = () => {
  return (
    <li className="transaction income">
      <p>Earned this month</p>
      <div className="right">
        <p>৳ 100</p>
        <button className="link">
          <img className="icon" alt="" src={editImg} />
        </button>
        <button className="link">
          <img className="icon" alt="" src={deleteImg} />
        </button>
      </div>
    </li>
  );
};

export default SingleTransaction;
