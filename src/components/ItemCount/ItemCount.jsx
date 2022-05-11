import React, { useState } from "react"
import "./ItemCount.css"

export default function ItemCount({ stock, name, onAddToCart }) {
	const [value, setValue] = useState(1)

	const handleAddToCart = () => {
		if (value >= 1 && value <= stock) {
			onAddToCart(value)
			console.log(`Se agrego ${value} ${name} al carrito`)
			setValue(1)
		}
	}

	const verificarCantidad = () => {
		if (stock === 1) {
			return <span>¡Último disponible!</span>
		} else if (stock === 0) {
			return <span>¡Sin stock!</span>
		}
		return (
			<>
				<button
					onClick={() => {
						setValue(value - 1)
					}}
					disabled={value <= 1 && true}>
					-
				</button>
				<span>{value}</span>
				<button
					onClick={() => {
						setValue(value + 1)
					}}
					disabled={value >= stock && true}>
					+
				</button>
			</>
		)
	}
	return (
		<>
			<div className="item-count">{verificarCantidad()}</div>
			<button className="add-cart" onClick={handleAddToCart} disabled={stock < 1 && true}>
				Agregar al carrito
			</button>
		</>
	)
}
