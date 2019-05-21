import React from "react";
import { Link } from "react-router-dom";

const BeerItem = ({ id, img, name, tag, author }) => (
  <div className="uk-margin uk-flex uk-flex-center">
    <div className="uk-flex uk-flex-column">
      <div
        className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2 uk-margin uk-width-xxlarge"
        uk-grid="true"
      >
        <div className="uk-card-media-left uk-cover-container uk-flex uk-flex-center">
          <Link to={`/beers/${id}`}>
            <img id="imagen" src={img} alt={name} uk-cover />
          </Link>
        </div>
        <div>
          <div className="uk-card-body">
            <h3 className="uk-card-title">{name}</h3>
            <p>L{tag}</p>
            <p>Created by: {author}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BeerItem;
