import React from "react"
import { useCartContext } from "../../context/CartContextProvider"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"
import './CartItem.css'
export default function CartItem({ item }) {
	console.log(item)
	const { removeFromCart } = useCartContext()
	const { title, quantity, price, id, pictureURL } = item

	return (
		<div className="cart-item">
			<div className="cart-item-left">
				<img src={pictureURL} alt={title} />
			</div>
			<div className="cart-item-text">
				<h3>{title}</h3>
				<p>${price}</p>
				<p>Cantidad: {quantity}</p>
			</div>
			<div className="cart-item-right">
				<IconButton onClick={() => removeFromCart(id)}>
					<DeleteIcon />
				</IconButton>
			</div>
				
		</div>
	)
}
