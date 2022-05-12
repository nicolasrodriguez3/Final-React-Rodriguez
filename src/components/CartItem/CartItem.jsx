import React from "react"
import { useCartContext } from "../../context/CartContextProvider"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CartItem({ item }) {
	const { removeFromCart } = useCartContext()
	const { title, quantity, price, id } = item
	console.log(item)
	return (
		<div>
			<h1>{title}</h1>
			<h4>Unidades: {quantity}</h4>
			<h4>Precio unitario: ${price}</h4>
			<IconButton onClick={() => removeFromCart(id)} aria-label="delete" color="secondary">
  <DeleteIcon />
</IconButton>
		</div>
	)
}
