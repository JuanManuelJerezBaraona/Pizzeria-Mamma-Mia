import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [allPizzas, setAllPizzas] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalToPay, setTotalToPay] = useState(0)

  return (
    <UserContext.Provider value={{ allPizzas, setAllPizzas, cart, setCart, totalToPay, setTotalToPay }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
