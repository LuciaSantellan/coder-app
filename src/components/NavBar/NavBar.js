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
                <NavLink to={'./category/servicios'} classsName={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Servicios</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar 