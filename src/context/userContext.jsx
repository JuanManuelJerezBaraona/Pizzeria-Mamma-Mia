import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [pokemones, setPokemones] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  return (
    <UserContext.Provider value={{ pokemones, setPokemones, selectedPokemon, setSelectedPokemon }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
