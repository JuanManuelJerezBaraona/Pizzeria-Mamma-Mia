import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import Button from 'react-bootstrap/Button'

const Pokemones = () => {

  const { pokemones, setPokemones, selectedPokemon, setSelectedPokemon } = useContext(UserContext)

  const navigate = useNavigate()

  const getAPI = async () => {
    try {
      const url = "https://pokeapi.co/api/v2/pokemon";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results);
      setPokemones(data.results.map(pokemon => pokemon.name))
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const handlePokemonChange = (e) => {
    const selectedValue = e.target.value
    setSelectedPokemon(selectedValue)
  }

  const handleVerDetallesClick = async () => {
    if(selectedPokemon) navigate(`/pokemones/${selectedPokemon}`)
    else alert("Selecciona un pokemón")
  }

  useEffect(() => {
    getAPI();
  }, []);
  
  return (
    <>
      <h1 className="text-center m-3">Selecciona un Pokemón</h1>
      <div className="d-flex flex-column align-items-center justify-content-center gap-3">
        <select name="pokemones-select" className='text-center rounded p-1' onChange={handlePokemonChange}>
          <option>Pokemones</option>
          {pokemones.map((name, index) => (
            <option key={index} value={name}>{name}</option>  
          ))}
        </select>
        <Button variant="dark" onClick={handleVerDetallesClick}>Ver Detalles</Button>
      </div>
    </>
  )
};
export default Pokemones;
