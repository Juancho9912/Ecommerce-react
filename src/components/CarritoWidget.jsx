import { BsCart3 } from 'react-icons/bs';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../context/CarritoContext'

const CarritoWidget = () => {

	const { cantidadEnCarrito } = useContext(CarritoContext);

	return (
		<div>
			<Link to='/carrito' className='menu-link'>
				<div className='contenedor-carrito-cantidad'>
					<h1><BsCart3 /></h1>
					<span className='numerito'> { cantidadEnCarrito() }</span>
				</div>
			</Link>
		</div>
	)
}

export default CarritoWidget