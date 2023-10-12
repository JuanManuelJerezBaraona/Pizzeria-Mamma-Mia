import { NavLink } from "react-router-dom";
import { useContext, useEffect } from 'react';
import { UserContext } from '../context/userContext';

const Navbar = () => {
  const { totalToPay } = useContext(UserContext)

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
            🛒${(totalToPay).toLocaleString('es-CL')}{" "}
          </NavLink>
      </nav>
    </div>
  );
};
export default Navbar;
