import { useContext } from 'react';
import { UserContext } from '../context/userContext';

import Button from 'react-bootstrap/Button';

function Carrito() {
    const { allPizzas, setAllPizzas, cart, setCart } = useContext(UserContext)

  return (
    <>
        <div className='p-lg-5 '>
            <div className='p-lg-5 pt-5 px-2 mb-lg-0 mb-5'>
                <p><b>Detalles del pedido:</b></p>
                {cart.map((pizza, index) => (
                    <div className='d-flex justify-content-between align-items-center p-3' key={index}>
                        <div className='d-flex flex-lg-row flex-column justify-content-between align-items-lg-center align-items-start gap-1'>
                            <img className='imagen-carrito' src={pizza.img} alt={`imagen de la pizza ${pizza.name}`} />
                            <p className='m-0'><b>{pizza.name}</b></p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center gap-1'>
                            <p className='text-success m-0'><b>${pizza.price}</b></p>
                            <Button className='bg-danger'>-</Button>
                            <p className='m-0'><b>1</b></p>
                            <Button className='bg-primary'>+</Button>
                        </div>
                    </div>
                ))}
                <div className='d-flex flex-column align-items-lg-start align-items-center'>
                    <h3>Total: ${cart.price}</h3>
                    <div>
                        <Button className='bg-success'>Ir a Pagar</Button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Carrito