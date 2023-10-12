import { useContext, useEffect } from 'react';
import { UserContext } from '../context/userContext';

import Button from 'react-bootstrap/Button';

function Carrito() {
    const { cart, setCart, totalToPay, setTotalToPay } = useContext(UserContext)

    const increaseQuantity = (pizzaId) => {
        const updatedCart = cart.map((pizza) => 
            pizza.id === pizzaId
            ? {...pizza, quantity: (pizza.quantity || 1) + 1 }
            : pizza
        )
        setCart(updatedCart)
    }

    const decreaseQuantity = (pizzaId) => {
        const updatedCart = cart.map((pizza) => 
            pizza.id === pizzaId
            ? {...pizza, quantity: (pizza.quantity || 1) - 1 }
            : pizza
       ).filter((pizza) => pizza.quantity > 0)
       setCart(updatedCart)
    }

    const total = cart.reduce((total, pizza) => total + (pizza.price * (pizza.quantity || 1)), 0)

    useEffect(() => {
        setTotalToPay((total).toLocaleString('es-CL'))
    }, [cart])

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
                            <p className='text-success m-0'><b>${(pizza.price * (pizza.quantity || 1)).toLocaleString('es-CL')}</b></p>
                            <Button onClick={() => decreaseQuantity(pizza.id)} className='bg-danger'>-</Button>
                            <p className='m-0'><b>{pizza.quantity || 1}</b></p>
                            <Button onClick={() => increaseQuantity(pizza.id)} className='bg-primary mas'>+</Button>
                        </div>
                    </div>
                ))}
                <div className='d-flex flex-column align-items-lg-start align-items-center'>
                    <h3>Total: ${totalToPay}</h3>
                    <div>
                        <Button className='bg-success pagar'>Ir a Pagar</Button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Carrito