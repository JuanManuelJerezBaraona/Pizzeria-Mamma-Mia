import { useParams } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';

function Pizza() {
    const { allPizzas, setAllPizzas, cart, setCart } = useContext(UserContext)
    const { id } = useParams()
    const navigate = useNavigate()

    const pizzaInfo = allPizzas.find(pizza => pizza.id === id)

    const cartAdd = (pizza) => {
        navigate(`/carrito`)
        setCart([...cart, pizza])
      }

    return (
        <>
            <div className='p-4'>
                {pizzaInfo && (
                <Card className="d-flex flex-lg-row justify-content-center flex-sm-column" key={pizzaInfo.id}>
                    <Card.Img variant='top' src={pizzaInfo.img}/>
                    <div className="d-flex flex-column">
                        <Card.Body>
                            <Card.Title className="mb-3">{pizzaInfo.name}</Card.Title>
                            <ListGroup>
                                <ListGroupItem>{pizzaInfo.desc}</ListGroupItem>
                                <ListGroupItem>
                                    <p><b>Ingredientes: </b></p>
                                        {pizzaInfo.ingredients.map((ingredient, index) => (
                                            <li key={index}>🍕{ingredient}</li>
                                        ))}
                                </ListGroupItem>
                            </ListGroup>
                        </Card.Body>
                        <Card.Body className="d-flex flex-row align-items-center justify-content-between">
                            <Card.Title className='text-center'>Precio: ${pizzaInfo.price}</Card.Title>
                            <div className='d-flex justify-content-center gap-2'>
                                <Button onClick={() => cartAdd(pizzaInfo)} className='bg-danger'>Añadir</Button>
                            </div>
                        </Card.Body>
                    </div>
                </Card>
                )}
            </div>
      </>
    )
}

export default Pizza