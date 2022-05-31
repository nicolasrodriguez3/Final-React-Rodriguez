import React from "react"
import Item from "../Item/Item"
import ItemSkeleton from "../ItemSkeleton/ItemSkeleton"
import "./ItemList.css"

export default function ItemList({ products, loading }) {
	const screenWidth = window.innerWidth,
		numberOfItems = Math.floor(screenWidth / 300)

	return loading ? (
		<>
			{[...Array(numberOfItems)].map((_, i) => (
				<ItemSkeleton key={i} />
			))}
		</>
	) : (
		products.map((product) => <Item key={product.id} product={product} />)
	)
}
