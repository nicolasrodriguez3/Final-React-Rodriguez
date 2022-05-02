import React from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"

export default function ItemListContainer(props) {
	return (
		<div className="item-list-container">
			<div className="item-list-container-search">
				<input type="text" placeholder="Buscar producto" value="En construccion" disabled />
			</div>
			<h2>{props.greeting}</h2>
			<section className="max-width item-list">
				<ItemList />
			</section>
		</div>
	)
}
