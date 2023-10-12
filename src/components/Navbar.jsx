import { NavLink } from "react-router-dom";

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <div>
      <nav className="bg-info d-flex justify-content-between p-3 px-4 text-white">
          <NavLink
            className={setActiveClass}
            to="/"
          >
            {" "}
            🍕Pizzería Mamma Mia!{" "}
          </NavLink>

          <NavLink
            className={setActiveClass}
            to="/carrito"
          >
            {" "}
            🛒Carrito{" "}
          </NavLink>
      </nav>
    </div>
  );
};
export default Navbar;
