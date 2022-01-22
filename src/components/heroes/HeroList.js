import { useMemo } from "react";
import { GetHeroesByPublisher } from "../../selectors/GetHeroesByPublisher";
import { HeroCard } from "./HeroCard";


export const HeroList = ({ publisher = "DC Comics" }) => {
  const heroes = useMemo(()=>GetHeroesByPublisher(publisher),[publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeInUp">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
