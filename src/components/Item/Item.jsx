import React, { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"

export default function Item({product}) {
	console.log(product)
	const [max, setMax] = useState(5)

	return (
		<article className="item">
			<img src={product.pictureURL} alt={product.title} />
			<div className="item-info">
				<h2>{product.title}</h2>
				<p>{product.price}</p>
				<ItemCount stock={max} name={product.title} onAddToCart={setMax} />
			</div>
		</article>
	)
}