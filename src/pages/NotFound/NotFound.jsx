import React from 'react'
import img from '../../assets/undraw_not_found.svg'

export default function NotFound() {
	return (
		<section className='cart-empty'>
			<h2>Página no encontrada</h2>
			<img src={img} alt="error" className='img-cart-empty'/>
		</section>
	)
}
