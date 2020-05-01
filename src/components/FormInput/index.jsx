import React from "react";
import "./FormInput.scss";

export function FormInput({ handleChange, label, ...rest }) {
  return (
    <div className="group">
      <input
        className="form-input"
        autocomplete="form-input"
        onChange={handleChange}
        {...rest}
      />
      {label ? (
        <label
          className={`${rest.value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}
