import React from "react"

export default function Item({product}) {
	return (
		<article className="item">
			<img src={product.pictureURL} alt={product.title} />
			<div className="item-info">
				<h2>{product.title}</h2>
				<p>{product.price}</p>
			</div>
		</article>
	)
}