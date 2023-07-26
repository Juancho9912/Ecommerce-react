import React, { useContext, useState } from 'react'
import { CarritoContext } from '../context/CarritoContext';
import { useForm } from 'react-hook-form';
import {collection, addDoc} from 'firebase/firestore';
import { db } from '../firebase/config';

const Checkout = () => {


	const [pedidoId, setPedidoId] = useState("");

	const { carrito, precioTotal, vaciarCarrito } = useContext(CarritoContext);
	const {register, handleSubmit} = useForm();
	
	const comprar = (data) => {
		const orden = {
			comprador: data,
			productos: carrito,
			total: precioTotal()
		}
		console.log(orden);
		const ordenRef = collection(db, "pedidos");

		addDoc(ordenRef, orden)
			.then((doc)=>{
				setPedidoId(doc.id);
				vaciarCarrito();
			})
	}

	if (pedidoId) {
		return (
			<div className='container'>
				<h1 className='main-title'>Muchas gracias por tu compra</h1>
				<br/>
				<p>Tu numero de pedido es: {pedidoId}</p>
			</div>
		)
	}

	return (
		<div className='container'>
			<h1 className='main-title'>Finalizar compra</h1>
			<form action="" className='formulario' onSubmit={handleSubmit(comprar)}>


				<input type="text" placeholder='Ingresa tu nombre' {...register("nombre")} required/>

				<input type="email" placeholder='Ingresa tu correo electronico' {...register("email")} required/>

				<input className='telefono' type="tel" placeholder='Ingresa tu telefono' {...register("telefono")} required/>

				<button className='enviar' type='submit'>Comprar</button>
			</form>
		</div>
	)
}

export default Checkout