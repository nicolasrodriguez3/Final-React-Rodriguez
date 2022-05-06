import React from "react"
import { Link } from "react-router-dom"
import Button from "../Button/Button"

export default function Item({ product }) {
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
					<Button className="btn primary" onClick={() => {}}>
						Comprar
					</Button>
				</div>
			</div>
		</article>
	)
}
