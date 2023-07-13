import { createContext, useState } from "react"

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else{
            console.error('El producto ya fue agregado al carrito')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const total = () => {
        const precioTotal = cart.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );

        return precioTotal
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext
