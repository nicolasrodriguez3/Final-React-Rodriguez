import React, { useState } from "react"
import "./ItemCount.css"

export default function ItemCount(props) {
	const [value, setValue] = useState(1)

	const handleAddToCart = () => {
		if (value >= 1 && value <= props.stock) {
			console.log(props)
			console.log(`Se agrego el producto ${props.name} al carrito`)
			setValue(1)
			props.onAddToCart(props.stock - value)
		}
	}

	const verificarCantidad = () => {
		if (props.stock === 1) {
			return <span>¡Último disponible!</span>
		} else if (props.stock === 0) {
			return <span>¡Sin stock!</span>
		}
		return (
			<>
				<button
					onClick={() => {
						setValue(value + 1)
					}}
					disabled={value >= props.stock && true}>
					+
				</button>
				<span>{value}</span>
				<button
					onClick={() => {
						setValue(value - 1)
					}}
					disabled={value <= 1 && true}>
					-
				</button>
			</>
		)
	}
	return (
		<>
			<div className="item-count">{verificarCantidad()}</div>
			<button className="add-cart" onClick={handleAddToCart} disabled={props.stock < 1 && true}>
				Agregar al carrito
			</button>
		</>
	)
}
