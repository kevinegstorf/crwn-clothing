import React from "react";
import "./Button.scss";

export function Button({ children, isGoogleSignIn, ...rest }) {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""}
      custom-button`}
      {...rest}
    >
      {children}
    </button>
  );
}
