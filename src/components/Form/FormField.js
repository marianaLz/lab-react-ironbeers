import React from "react";

const FormField = ({ label, type, name, holder, value, onChange }) => (
  <div className="uk-margin uk-flex uk-flex-column">
    {type !== "submit" ? (
      <label className="uk-margin">
        <b>{label}</b>
      </label>
    ) : null}
    {type !== "textarea" ? (
      <input
        id="input"
        className="uk-margin-remove-top uk-input uk-width-xxlarge"
        type={type}
        name={name}
        placeholder={holder}
        value={value}
        onChange={onChange}
        required
      />
    ) : type === "submit" ? (
      <input type={type} value={value} />
    ) : (
      <textarea
        id="input"
        className="uk-textarea uk-width-xxlarge"
        name={name}
        placeholder={holder}
        value={value}
        onChange={onChange}
        required
      />
    )}
  </div>
);

export default FormField;
