import React from "react"
import { useParams } from "react-router-dom"

import ItemList from "../../components/ItemList/ItemList"
import "./ItemListContainer.css"

export default function ItemListContainer(props) {
	const {category} = useParams()

	return (
		<div className="item-list-container">
			
			<h2>{props.greeting}❤️</h2>
			<section className="max-width item-list">
				<ItemList category={category}/>
			</section>
		</div>
	)
}
