import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

import Card from 'react-bootstrap/Card';

function Pokemon() {
  const { name } = useParams()

  const [pokemonData, setPokemonData] = useState(null);

  const getApi = async () => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      const response = await fetch(url);
      const data = await response.json();
      setPokemonData(data);
      console.log(pokemonData)
    } catch (error) {
      console.error(`Error al obtener los datos del Pokémon: ${name}`, error);
    }
  }

  useEffect(() => {
    getApi();
  }, [name]);


  return (
    <div className='d-flex justify-content-center mt-5'>
      {pokemonData && (
        <Card className='d-flex flex-row align-items-center' style={{ width: '30rem' }}>
          <Card.Img variant="top" src={pokemonData.sprites.front_default} />
          <Card.Body className='d-flex flex-column align-items-center'>
            <Card.Title>{pokemonData.name}</Card.Title>
            <Card.Text>
              <li>hp: {pokemonData.stats[0].base_stat}</li>
              <li>attack: {pokemonData.stats[1].base_stat}</li>
              <li>defence: {pokemonData.stats[2].base_stat}</li>
              <li>special-attack: {pokemonData.stats[3].base_stat}</li>
              <li>special-defence: {pokemonData.stats[4].base_stat}</li>
              <li>speed: {pokemonData.stats[5].base_stat}</li>
              <li>type: {pokemonData.types[0].type.name}</li>
            </Card.Text>
          </Card.Body>
        </Card>  
      )}
      
    </div>
  )
}

export default Pokemon