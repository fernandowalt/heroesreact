import { Heroes } from "../components/search/data/Heroes";

export const GetHeroesByName = (name = "") => {
  if (name === "") {
    return [];
  }
  name = name.toLowerCase();

  return Heroes.filter((hero) => {
    return hero.superhero.toLowerCase().includes(name);
  });
};
