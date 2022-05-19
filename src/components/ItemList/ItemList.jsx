import React from "react"

import Item from "../Item/Item"
import "./ItemList.css"
import Loader from "../Loader/Loader"

export default function ItemList({products, loading}) {
	return loading ? (
		Loader()
	) : (
		products.map((product) => <Item key={product.id} product={product} />)
	)
}
