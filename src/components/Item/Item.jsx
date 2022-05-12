import React from "react"
import { useCartContext } from "../../context/CartContextProvider"
import { Link } from "react-router-dom"
import Button from "../Button/Button"

export default function Item({ product }) {
	const { addToCart } = useCartContext()
	return (
		<article className="item">
			<img src={product.pictureURL} alt={product.title} />
			<div className="item-info">
				<h2>{product.title}</h2>
				<p>{product.price}</p>

				<div className="btn-container">
					<Link to={`/details/${product.id}`} className="btn secondary">
						Detalles
					</Link>
					<Button
						className="btn primary"
						onClick={() => {
							addToCart(product, 1)
						}}>
						Comprar
					</Button>
					
				</div>
			</div>
		</article>
	)
}
