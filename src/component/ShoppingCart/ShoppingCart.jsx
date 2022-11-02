import { useState } from 'react'

const items = [{
    name: 'apple',
    price: 0.39
}, {
    name: 'banana',
    price: 0.79
}, {
    name: 'cherry tomatoes',
    price: 3.99
}]

function ShoppingCart() {
    const [cart, setCart] = useState([]);
    const total = cart.reduce((sum, item) => sum += (item.price * item.quantity) , 0).toFixed(2);

    const addToCart = (item) => {
        const copyCart = [...cart];
        const itemToCart = copyCart.find(cartItem => cartItem.name  === item.name);
        if (itemToCart) {
            itemToCart.quantity += 1;
        }else {
            setCart(prevCart => [...prevCart, {...item, quantity: 1}])
        }
    }

    const increase = (name) => {
        const cartCopy = [...cart]
        const item = cartCopy.find(i => i.name === name)
        item.quantity += 1
        setCart(cartCopy)
    }

    const decrease = (name) => {
        let cartCopy = [...cart]
        const item = cartCopy.find(i => i.name === name)
        item.quantity -= 1;
        if(item.quantity === 0){
            cartCopy = cartCopy.filter(i => i.name !== name)
        }
        setCart(cartCopy)
    }

    return (
        <div className='shoppingCartWrapper'>
            <div>
                <h1>Shopping Cart</h1>
                <div className='items'>
                    <h2>Items</h2>
                    {items.map(item => (
                        <div key={item.name}>
                            <h3>{item.name}</h3>
                            <p>${item.price}</p>
                            <button onClick={() => addToCart(item)}>Add to Cart</button>
                        </div>)
                    )}
                </div>
            </div>

            <div>
                <div>
                    <h2>Cart</h2>
                    {cart.map(item => (
                        <div key={item.name}>
                            <h3>{item.name}</h3>
                            <p>
                                <button onClick={() => decrease(item.name)}>-</button>
                                {item.quantity}
                                <button onClick={() => increase(item.name)}>+</button>
                            </p>
                            <p>Subtotal: ${(item.quantity * item.price).toFixed(2)}</p>
                        </div>
                    ))}
                </div>
                {cart.length ?  (
                    <div className='total'>
                        <h2>Total: ${total}</h2>
                    </div>
                ) : <p>Add an item to your cart</p>}
            </div>
        </div>
    )
}

export default ShoppingCart