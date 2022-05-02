import React, { useState, useEffect } from "react"
import Item from "../Item/Item"
import "./ItemList.css"

function ItemList(props) {
	const [products, setProducts] = useState([])
	// const query = "samsung" //* provisorio

	// useEffect(() => {
	// 	fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setProducts(data.results)
	// 		})
	// }, [])
	useEffect(() => {
		fetch("./JSON/productos.json")
		.then(res => res.ok ? res.json(res) : Promise.reject(res))
    .then(data => {
      console.log(data);
			setProducts(data)
    })
    .catch(err => console.log(err));

	}, [])

	return products.length === 0 ? (
		<p>Cargando...</p>
	) : (
		products.map((product) => <Item key={product.id} product={product} />)
	)
}

export default ItemList
