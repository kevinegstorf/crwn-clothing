import React from "react";
import { withRouter } from "react-router-dom";
import "./CollectionItem.scss";

function CollectionItem({ name, price, imageUrl, history, match }) {
  return (
    <div
      className="collection-item"
      onClick={() => history.push(`${match.url}${name}`)}
    >
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">€{price},-</span>
      </div>
    </div>
  );
}

export default withRouter(CollectionItem);
