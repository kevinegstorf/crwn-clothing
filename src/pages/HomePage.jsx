import React from "react";
import "./HomePage.scss";

export default function HomePage() {
  const Products = ({ title }) => {
    return (
      <div className="menu-item">
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    );
  };
  return (
    <div className="homepage">
      <div className="directory-menu">
        <Products title="hats" />
        <Products title="Jackets" />
        <Products title="Sneakers" />
        <Products title="Womens" />
        <Products title="Mens" />
      </div>
    </div>
  );
}
