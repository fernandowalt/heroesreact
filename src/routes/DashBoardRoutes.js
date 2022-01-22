import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/ul/Navbar";
import { DcScreen } from "../components/DC/DcScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScrenn } from "../components/search/SearchScrenn";
import { HeroesScreen } from "../components/heroes/HeroScreen";
import { LoginScreen } from "../components/login/LoginScreen";


export const DashBoardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="dc" element={<DcScreen />} />
          <Route path="search" element={<SearchScrenn />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="hero/:heroeId" element={<HeroesScreen />} />
        </Routes>
      </div>
    </>
  );
};
