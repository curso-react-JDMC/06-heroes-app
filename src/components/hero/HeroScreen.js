import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(()=>getHeroById(id),[id]); 

  const handleReturn = () => {
    navigate(-1);
  };
  if (!hero) return <Navigate to={"/"} />;
  const imgpath = `/assets/${hero.id}.jpg`;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={imgpath} className="img-thumbnail animate__animated animate__fadeInLeft" alt={hero.superhero} />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance:</b> {hero.first_appearance}
          </li>
        </ul>{" "}
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-primary" onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};
