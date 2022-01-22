import { Heroes } from "../components/search/data/Heroes";

export const GetHeroById = (id) => {
  return Heroes.find((hero) => hero.id === id);
};
