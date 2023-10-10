import { NavLink } from "react-router-dom";

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <div>
      <nav className="d-flex justify-content-between p-4 bg-secondary text-white">
        <div>
          <img 
            src="https://p1.hiclipart.com/preview/425/772/49/logo-pkmn-center-pokemon-pokeball-logo-png-clipart.jpg" 
            alt="Logo pokebola" 
            className="pokebola"
          />
        </div>

        <div className="d-flex gap-3">
          <NavLink
            className={setActiveClass}
            to="/"
          >
            {" "}
            Home{" "}
          </NavLink>

          <NavLink
            className={setActiveClass}
            to="/pokemones"
          >
            {" "}
            Pokemones{" "}
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
