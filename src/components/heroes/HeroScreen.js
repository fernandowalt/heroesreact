import { useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import { GetHeroById } from "../../selectors/GetHeroById";
import { HeroInfo } from "./HeroInfo";

export const HeroesScreen = () => {
  const { heroeId } = useParams();
  const hero = useMemo(() => GetHeroById(heroeId), [heroeId]);

  if (!hero) {
    return <Navigate to="/dc" />;
  }

  return (
    <div>
      <h1>Heroes Screen</h1>
      <HeroInfo {...hero} />
    </div>
  );
};
