import React, { useState, useEffect } from "react"
import { DotPulse } from "@uiball/loaders"

import Item from "../Item/Item"
import "./ItemList.css"

function ItemList({ products }) {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		products.length > 0 && setLoading(false)
	}, [products])

	return loading ? (
		<DotPulse size={40} speed={1.3} color="#7c2cab" />
	) : (
		products.map((product) => <Item key={product.id} product={product} />)
	)
}

export default ItemList
