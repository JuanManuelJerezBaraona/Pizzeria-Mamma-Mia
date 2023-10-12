import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import pizzas from '../pizzas.json';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';

import Header from '../components/Header';

const Home = () => {
  const { allPizzas, setAllPizzas, cart, setCart, setTotalToPay } = useContext(UserContext)
  const navigate = useNavigate()

  const getPizzas = () => {
    try {
      const pizzaArray = pizzas.map(pizza => ({
        id: pizza.id,
        name: pizza.name,
        ingredients: pizza.ingredients,
        img: pizza.img,
        price: pizza.price,
        desc: pizza.desc
      }))
      setAllPizzas(pizzaArray)
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  const handleInfo = (pizzaId) => {
    navigate(`/pizza/${pizzaId}`)
  }

  const cartAdd = (pizza) => {
    const existingPizza = cart.find((item) => item.id === pizza.id)
    if(existingPizza) {
      existingPizza.quantity = (existingPizza.quantity || 1) + 1
      setCart([...cart])
    } else {
      setCart([...cart, {...pizza, quantity: 1}])
    }
  }

  const total = cart.reduce((total, pizza) => total + (pizza.price * (pizza.quantity || 1)), 0)

  useEffect(() => {
      setTotalToPay(total)
  }, [cart])

  return (
    <>
      <Header />

      <div className='d-flex flex-row flex-wrap justify-content-center gap-3 p-4 px-5'>
        {allPizzas.map(pizza => (
          <Card key={pizza.id} style={{ width: '14rem' }}>
            <Card.Img variant='top' src={pizza.img}/>
            <Card.Body>
              <Card.Title>{pizza.name}</Card.Title>
              <ListGroup>
                <ListGroupItem>
                  <p><b>Ingredientes: </b></p>
                  {pizza.ingredients.map((ingredient, index) => (
                    <li key={index}>🍕{ingredient}</li>
                  ))}
                </ListGroupItem>
              </ListGroup>
            </Card.Body>
            <Card.Body>
              <Card.Title className='text-center'>Precio: ${(pizza.price).toLocaleString('es-CL')}</Card.Title>
                <div className='d-flex justify-content-center gap-2'>
                  <Button onClick={() => handleInfo(pizza.id)} className='bg-info ver-mas'>Ver Más</Button>
                  <Button onClick={() => cartAdd(pizza)} className='bg-danger'>Añadir</Button>
                </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  )
};
export default Home;