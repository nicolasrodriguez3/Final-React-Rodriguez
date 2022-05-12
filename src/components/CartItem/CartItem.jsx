import React from 'react'

export default function CartItem({item}) {
	return (
		<div>
			<h3>{item.name}</h3>
			<p>{item.quantity}</p>
			<p>{item.price}</p>
		</div>
	)
}
