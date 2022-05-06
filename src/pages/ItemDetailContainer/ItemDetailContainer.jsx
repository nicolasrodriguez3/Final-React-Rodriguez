import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { DotPulse } from '@uiball/loaders'

import ItemDetail from "../../components/ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"

export default function ItemDetailContainer() {
	const [product, setProduct] = useState(null)
	const itemID = parseInt(useParams().id)

	useEffect(() => {
		fetch("/JSON/productos.json")
			.then((res) => (res.ok ? res.json(res) : Promise.reject(res)))
			.then((data) => {
				const product = data.find((item) => item.id === itemID)

				setTimeout(() => setProduct(product), 1000) //* Timeout de 1 segundo
			})
			.catch((err) => console.log(err))
	}, [itemID])

	return (
		<div className="item-detail-container max-width">
			{product ? <ItemDetail detail={product} /> : <DotPulse size={40} speed={1.3} color="#7c2cab" />}
		</div>
	)
}
