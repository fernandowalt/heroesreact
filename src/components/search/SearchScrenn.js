import {useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "../../customsHook/useForm";
import { GetHeroesByName } from "../../selectors/GetHeroesByName";
import { HeroCard } from "../heroes/HeroCard";
import queryString from "query-string";

export const SearchScrenn = () => {
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [values, handleInputChange] = useForm({ searchText: q });
  const { searchText } = values;

  const navigate = useNavigate();

  const heroesFilted = useMemo(() => GetHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search Hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button type="submit" className="btn btn-outline-primary mt-1">
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {q === "" ? (
            <div className="alert alert-info">Buscar un héroe</div>
          ) : (
            heroesFilted.length === 0 && (
              <div className="alert alert-danger">No hay resultados: {q}</div>
            )
          )}

          {heroesFilted.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
