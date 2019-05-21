import React from "react";

const GoBack = ({ history }) => (
  <div className="go-back">
    <button
      className="uk-button uk-button-default"
      onClick={() => history.goBack()}
    >
      Go Back
    </button>
  </div>
);

export default GoBack;
