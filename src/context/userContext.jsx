import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  // Inicializa el carrito con los datos almacenados en LocalStorage o un arreglo vacío si no hay datos.
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

  const [allPizzas, setAllPizzas] = useState([]);
  const [cart, setCart] = useState(initialCart);
  const [totalToPay, setTotalToPay] = useState(0);

  // Guarda el carrito en LocalStorage cuando cambie.
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <UserContext.Provider value={{ allPizzas, setAllPizzas, cart, setCart, totalToPay, setTotalToPay }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
