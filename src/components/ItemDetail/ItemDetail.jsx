import React, { useState } from "react"
import { useCartContext } from "../../context/CartContextProvider"
import ItemAddedToCart from "../ItemAddedToCart/ItemAddedToCart"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

export default function ItemDetail({ detail }) {
	const { title, description, price, imageURL, stock } = detail
	const [addedToCart, setAddedToCart] = useState(false)
	const { addToCart } = useCartContext()

	const handleAddToCart = (count) => {
		if (!addedToCart) {
			setAddedToCart(true)
			addToCart(detail, count)
		}
	}

	return (
		<section className="product-detail container max-width">
			<picture className="product-detail-left">
				<img src={imageURL[0]} alt={title} />
			</picture>
			<aside className="product-detail_right">
				<header>
					<h1>{title}</h1>
				<p className="price">${price}</p>
				</header>
				
				{/* Mostrar los botones hasta que el producto se agregue al carrito */}
				{!addedToCart ? (
					<ItemCount stock={stock} name={title} onAdd={handleAddToCart} />
				) : (
					<ItemAddedToCart />
				)}

				<p className="description">{description}</p>
			</aside>
		</section>
	)
}
