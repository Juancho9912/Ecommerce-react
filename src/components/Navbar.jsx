import React from 'react'
import { Link } from 'react-router-dom'
import CarritoWidget from './CarritoWidget'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to='/' className='logo'><h1>Waxboy Shop</h1></Link>
            <ul className='menu'>
                <li><Link to='/' className='menu-link'>Inicio</Link></li>
                <li><Link to='/productos' className='menu-link'>Productos</Link></li>
                <li><Link to='/productos/medias' className='menu-link'>Medias</Link></li>
                <li><Link to='/productos/pantalones' className='menu-link'>Pantalones</Link></li>
                <li><Link to='/productos/camisetas' className='menu-link'>Camisetas</Link></li>
                <li><Link to='/productos/buzos' className='menu-link'>Busos</Link></li>
                <li><Link to='/nosotros' className='menu-link'>Nosotros</Link></li>
                <li><Link to='/contacto' className='menu-link'>Contacto</Link></li>
                <li><CarritoWidget/></li>
            </ul>
        </nav>
    )
}

export default Navbar