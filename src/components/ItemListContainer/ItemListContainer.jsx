import React from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"

export default function ItemListContainer(props) {
	return (
		<div className="item-list-container">
			<h2>{props.greeting}</h2>
			<section className="max-width item-list">
			<ItemList title="Item 1" price="$100" src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60" />
			<ItemList title="Item 1" price="$100" src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60" />
			<ItemList title="Item 1" price="$100" src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60" />
			</section>
		</div>
	)
}
