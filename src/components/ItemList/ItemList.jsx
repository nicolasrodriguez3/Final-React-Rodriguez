import React, { useState, useEffect } from "react"
import { DotPulse } from '@uiball/loaders'

import Item from "../Item/Item"
import "./ItemList.css"

function ItemList(props) {
	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch("/JSON/productos.json")
		.then(res => res.ok ? res.json(res) : Promise.reject(res))
    .then(data => {
			if(props.category){
				setProducts(data.filter(product => product.category === props.category))
			}
			else{
				setProducts(data)
			}
    })
    .catch(err => console.log(err))

	}, [props.category])

	return products.length === 0 ? (
		<DotPulse size={40} speed={1.3} color="#7c2cab" />
	) : (
		products.map((product) => <Item key={product.id} product={product} />)
	)
}

export default ItemList
