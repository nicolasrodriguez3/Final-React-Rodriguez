import React, { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"

export default function ItemListContainer(props) {
	const [query, setQuery] = useState("celular")

	return (
		<div className="item-list-container">
			<div className="item-list-container-search">
				<input type="text" placeholder="Buscar producto" />
				<button onClick={(e) => setQuery(e.target.value)}>Buscar</button>
			</div>
			<h2>{props.greeting}</h2>
			<section className="max-width item-list">
				<ItemList />
			</section>
		</div>
	)
}
