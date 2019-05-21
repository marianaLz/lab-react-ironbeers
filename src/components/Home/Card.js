import React from "react";
import { Link } from "react-router-dom";

const Card = ({ creatorA, creator, photo, path, children, getRandom }) => (
  <div className="uk-margin uk-card uk-card-default" onClick={getRandom}>
    <div>
      <Link to={path}>
        <img width="100%" src={photo} alt={creator} />
      </Link>
    </div>
    <div className="uk-card-body">
      <h2>{children}</h2>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, omnis
        natus minima dolores quod quia officiis, alias, ducimus cumque
        perferendis in eaque ipsa? Nesciunt, assumenda. Omnis aut fuga obcaecati
        iusto.
      </h3>
    </div>
  </div>
);

export default Card;
