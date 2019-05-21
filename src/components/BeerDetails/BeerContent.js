import React from "react";

const BeerContent = ({ img, name, level, tag, brewed, info, author }) => (
  <div className="uk-margin uk-flex uk-flex-center">
    <div className="uk-flex uk-flex-column">
      <div
        className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2 uk-margin uk-width-xxlarge"
        uk-grid="true"
      >
        <div className="uk-card-media-top uk-cover-container uk-flex uk-flex-center">
          <img id="imagen2" src={img} alt={name} uk-cover />
        </div>
        <div>
          <div className="uk-card-body">
            <h1 className="uk-card-title">{name}</h1>
            <p>{level}</p>

            <p>{tag}</p>
            <p>
              <b>{brewed}</b>
            </p>

            <p>{info}</p>
            <span>
              <b>{author}</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BeerContent;
