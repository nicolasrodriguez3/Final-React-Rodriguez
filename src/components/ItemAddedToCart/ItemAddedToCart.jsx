import React from "react"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"

export default function ItemAddedToCart() {
	return (
		<div className="item-added-success">
			<div className="item-added-text">¡Se agregó al carrito🙌!</div>
			<Link to="/cart" className="item-added-link">
				<Button variant="contained" color="secondary">
					Ver
				</Button>
			</Link>
		</div>
	)
}
