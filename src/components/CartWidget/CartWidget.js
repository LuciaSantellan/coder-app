import carrito from './assets/carrito.png'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='carrito'>
            <img src={carrito} alt="cart-widget"/>
            0
        </div>
    )
}
export default CartWidget