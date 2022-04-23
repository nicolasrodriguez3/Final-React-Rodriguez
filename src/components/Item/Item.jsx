import React, { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"

function Item(props) {
	const { name, price, stock, src } = props.producto
	const [max, setMax] = useState(stock)

	return (
		<article className="item">
			<img src={src} alt={name} />
			<div className="item-info">
				<h2>{name}</h2>
				<p>{price}</p>
				<ItemCount stock={max} name={name} onAddToCart={setMax} />
			</div>
		</article>
	)
}

export default Item
