import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <Link to='/'>
                <h1>Lucia Beauty Studio</h1>
            </Link>
            <div className='navBar'>
                <NavLink to={'./category/inicio'} className={({isActive}) => isActive ? 'ActiveOption boton' : 'Option boton'} >Inicio</NavLink>
                <NavLink to={'./category/manos'} className={({isActive}) => isActive ? 'ActiveOption boton' : 'Option boton'} >Manos</NavLink>
                <NavLink to={'./category/pies'} className={({isActive}) => isActive ? 'ActiveOption boton' : 'Option boton'} >Pies</NavLink>
                <NavLink to={'./category/contacto'} className={({isActive}) => isActive ? 'ActiveOption boton' : 'Option boton'} >Contacto</NavLink>

            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar 