import React from "react";

const ViewBudget = (props) => {
  return (
    <>
      <span>
        My weekly average spending: {props.budget}
        <span style={{ fontWeight: "bold" }}> HUF</span> *{" "}
      </span>
      <button
        type="button"
        class="btn btn-primary"
        onClick={props.handleEditClick}
      >
        Change my Budget
      </button>
    </>
  );
};

export default ViewBudget;
