import React from "react"
import { DotPulse } from '@uiball/loaders'

import Item from "../Item/Item"
import "./ItemList.css"

export default function ItemList({products, loading}) {
	return loading ? (
		<div className="center"><DotPulse size={40} speed={1.3} color="#7c2cab" /></div>
	) : (
		products.map((product) => <Item key={product.id} product={product} />)
	)
}
