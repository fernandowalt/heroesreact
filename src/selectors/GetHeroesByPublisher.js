import { Heroes } from "../components/search/data/Heroes";

export const GetHeroesByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }
  return Heroes.filter((heroe) => heroe.publisher === publisher);
};
