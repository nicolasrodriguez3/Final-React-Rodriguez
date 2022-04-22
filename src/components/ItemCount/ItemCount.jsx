import React, { useState } from "react"
import "./ItemCount.css"

export default function ItemCount(props) {
	const [value, setValue] = useState(1)


	const addToCart = () => {
		setValue(1)
	}
	return (
		<>
			<div className="item-count">
				<button onClick={()=>{setValue(value+1)}} disabled={value >= props.stock && true} >+</button>
				<span>{value}</span>
				<button onClick={()=>{setValue(value-1)}} disabled={value <= 1 && true} >-</button>
			</div>
			<button className="add-cart" onClick={addToCart}>Agregar al carrito</button>
		</>
	)
}
