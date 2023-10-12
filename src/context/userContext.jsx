import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [allPizzas, setAllPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <UserContext.Provider value={{ allPizzas, setAllPizzas, cart, setCart }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
