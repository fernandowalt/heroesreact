import { useNavigate } from "react-router-dom";

export const HeroInfo = (hero) => {
  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
    url
  } = hero;
  const path = `/${id.split("-")[0]}`;
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(path);
  };

  const image = require(`../../assets/img/${id}.jpg`);

  return (
    <div className="row mt-5">
      <div className="col-3">
        <img
          src={image}
          className="img-thumbnail animate__animated animate__zoomIn"
          alt=""
        />
      </div>
      <div className="col-8 animate__animated animate__zoomIn">
        <h3>{superhero}</h3>
        <ul className="list-group">
          <li className="list-list-group-item">
            {" "}
            <b>Alter Ego: </b>
            {alter_ego}
          </li>
          <li className="list-list-group-item">
            {" "}
            <b>Publisher: </b>
            {publisher}
          </li>
          <li className="list-list-group-item">
            {" "}
            <b>First Appearance: </b>
            {first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>

        <button className="btn btn-outline-info" onClick={handleRedirect}>
          Return
        </button>
      </div>
    </div>
  );
};
