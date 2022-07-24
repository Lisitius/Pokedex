import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
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
    </div>
  );
};

export default Navbar;
