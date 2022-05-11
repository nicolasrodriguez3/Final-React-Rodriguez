import React, { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

export default function ItemDetail(props) {
	console.log(props)
	const { title, description, price, pictureURL, stock, category, discount } = props.detail
	const [cart, setCart] = useState(0)

	const productsInCart = () => {
		return (
			<div className="item-added-success">
				<div className="item-added-text">¡Se agregó al carrito!</div>
				<Link to="/cart">Ver</Link>
			</div>
		)
	}

	return (
		<section className="product-detail">
			<picture className="product-detail-left">
				<img src={pictureURL} alt={title} />
			</picture>
			<aside className="product-detail_right">
				<h1>{title}</h1>
				<p>{description}</p>
				<p>{price}</p>
				{cart === 0 ? (
					<ItemCount stock={stock} name={title} onAddToCart={setCart} />
				) : (
					productsInCart()
				)}
			</aside>
		</section>
	)
}
