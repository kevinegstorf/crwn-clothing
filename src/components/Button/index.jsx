import React from "react";
import "./Button.scss";

export function Button({ children, ...rest }) {
  return (
    <button className="custom-button" {...rest}>
      {children}
    </button>
  );
}
