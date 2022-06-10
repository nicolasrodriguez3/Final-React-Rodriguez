import React, { useState } from "react"
import "./ItemCount.css"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"

export default function ItemCount({ stock, name, onAdd }) {
	const [value, setValue] = useState(1)

	const handleAddToCart = () => {
		if (value >= 1 && value <= stock) {
			onAdd(value)
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
					<RemoveIcon fontSize="small"/>
				</button>
				<span>{value}</span>
				<button
					onClick={() => {
						setValue(value + 1)
					}}
					disabled={value >= stock && true}>
					<AddIcon fontSize="small"/>
				</button>
			</>
		)
	}
	return (
		<div className="item-count">
			<div className="item-counter">{verificarCantidad()}</div>
			<button className="add-cart" onClick={handleAddToCart} disabled={stock < 1 && true}>
				Agregar al carrito
			</button>
		</div>
	)
}
