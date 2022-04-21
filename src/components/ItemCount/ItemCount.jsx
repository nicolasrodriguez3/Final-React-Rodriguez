import React, { useState } from "react"

export default function ItemCount(props) {
	const [value, setValue] = useState(1)
	return (
		<>
			<div className="item-count">
				<button onClick={()=>{setValue(value+1)}}>+</button>
				<span>{value}</span>
				<button onClick={()=>{setValue(value-1)}}>-</button>
			</div>
			<button>Agregar al carrito</button>
		</>
	)
}
