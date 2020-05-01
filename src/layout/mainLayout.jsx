import React from "react";
import { Header } from "../components";

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
