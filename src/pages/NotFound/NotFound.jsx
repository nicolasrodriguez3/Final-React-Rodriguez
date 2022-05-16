import React from 'react'
import img from '../../assets/undraw_not_found.svg'

export default function NotFound() {
	return (
		<div>
			<img src={img} alt="error" />
			<div>Página no encontrada</div>
		</div>
	)
}
