import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContextProvider"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

export default function ItemDetail({ detail }) {
	console.log(detail)
	const { id, title, description, price, pictureURL, stock, category, discount } = detail
	const [addedToCart, setAddedToCart] = useState(false)
	const { addToCart } = useCartContext()

	const handleAddToCart = (count) => {
		if (!addedToCart) {
			setAddedToCart(true)
			addToCart(detail, count)
		}
	}

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
				{/* Mostrar los botones hasta que el producto se agregue al carrito */}
				{!addedToCart ? (
					<ItemCount stock={stock} name={title} onAdd={handleAddToCart} />
				) : (
					productsInCart()
				)}
			</aside>
		</section>
	)
}
