import {useForm} from 'react-hook-form'

const Contacto = () => {

	const {register, handleSubmit} = useForm();

	const enviar = (data) => {
		console.log(data.telefono);
	}

	return (
		<div className='container'>
			<h1 className='main-title'>Contacto</h1>
			<form action="" className='formulario' onSubmit={handleSubmit(enviar)}>


				<input type="text" placeholder='Ingresa tu nombre' {...register("nombre")} required/>

				<input type="email" placeholder='Ingresa tu correo electronico' {...register("email")} required/>

				<input className='telefono' type="tel" placeholder='Ingresa tu telefono' {...register("telefono")} required/>

				<button className='enviar' type='submit'>Enviar</button>
			</form>
		</div>
	)
}

export default Contacto