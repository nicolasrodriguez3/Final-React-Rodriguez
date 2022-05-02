import React, { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"

export default function ItemDetailContainer() {
	const [product, setProduct] = useState(null)

	useEffect(() => {
		fetch("./JSON/productos.json")
			.then((res) => (res.ok ? res.json(res) : Promise.reject(res)))
			.then((data) => {
				setTimeout(() => setProduct(data[0]), 2000) //* Timeout de dos segundos
			})
			.catch((err) => console.log(err))
	}, [])

	return (
		<div className="item-detail-container max-width">
			{product ? <ItemDetail detail={product} /> : <div>Cargando...</div>}
		</div>
	)
}
