import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <h1>Lucia Beauty Studio</h1>
            <div className='navBar'>
                <button className='boton'>Inicio</button>
                <button className='boton'>Servicios</button>
                <button className='boton'>Nosotros</button>
                <button className='boton'>Ubicación</button>
                <button className='boton'>Contacto</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar 