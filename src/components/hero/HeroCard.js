import React from "react";
import { Link } from "react-router-dom";
import { heroImages } from "../../helpers/heroImages";

//const heroImages = require.context('../../../public/assets',true);
export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutter">
        <div className="col-md-4">
            <img src={heroImages(`./${id}.jpg`)} alt={superhero} className="card-img-top"/>
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                <p className="card-text">{alter_ego}</p>
                {
                    (alter_ego !== characters) && <p className="text-muted">{characters}</p>
                }
            <p className="card-text"> <small className="text-muted">{first_appearance}</small></p>
            <Link to={`/hero/${id}`}>Más..</Link>
            </div>
        </div>
        </div>
      </div>
      
    </div>
  );
};
