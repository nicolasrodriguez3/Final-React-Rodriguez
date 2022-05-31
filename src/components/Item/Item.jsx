import React, { useState } from "react"
import { useCartContext } from "../../context/CartContextProvider"
import { Link } from "react-router-dom"
import Button from "../Button/Button"
import ItemAddedToCart from "../ItemAddedToCart/ItemAddedToCart"

const getDiscount = (current, previous) => {
	// si existe el campo "Precio anterior" y este es mayor al precio actual se retorna el porcentaje de descuento
	if (previous && previous > current) return (((previous - current) / previous) * 100).toFixed(0)
}

export default function Item({ product }) {
	const { addToCart } = useCartContext()
	const [addedToCart, setAddedToCart] = useState(false)
	const { title, price, lastPrice, imageURL, id } = product

	// guardamos el descuento para verificar que exista
	const discount = getDiscount(price, lastPrice)

	return (
		<article className="item">
			<Link to={`/details/${id}`} className="item-link">
				<img src={imageURL[0]} alt={title} />
				<div className="item-info">
					{discount && <div className="last-price">${lastPrice}</div>}
					<div className="price-container">
						<span className="price">${price}</span>
						{discount && <span className="discount">{discount}% OFF</span>}
					</div>
					<h2 className="title">{title}</h2>
				</div>
			</Link>
			{/* Mostrar los botones hasta que el producto se agregue al carrito */}
			{!addedToCart ? (
				<div className="btn-container">
					<Link to={`/details/${id}`} className="btn secondary">
						Detalles
					</Link>
					<Button
						className="btn primary"
						onClick={() => {
							addToCart(product, 1)
							setAddedToCart(true)
						}}>
						Comprar
					</Button>
				</div>
			) : (
				<ItemAddedToCart />
			)}
		</article>
	)
}
