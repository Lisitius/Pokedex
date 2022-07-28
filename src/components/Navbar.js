import { NavLink } from "react-router-dom";

import logopoke from "../assets/img/home/pokemon.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logopoke} alt="logo pokemon" />
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/pokedex">
          <li>Pokedex</li>
        </NavLink>
        <NavLink to="randompoke">
          <li>Random Poke</li>
        </NavLink>
        <NavLink to="contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
