import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { DotPulse } from '@uiball/loaders'

import ItemDetail from "../../components/ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { doc, getDoc } from "firebase/firestore"
import db from "../../firebase/firebaseConfig"

export default function ItemDetailContainer() {
	const [product, setProduct] = useState(null)
	const itemID = (useParams().id)

	useEffect(() => {
		console.log(itemID)
		// Funcion para obtener los datos de firestore
		const getData = async () => {
			const itemRef = doc(db, "items", itemID);
			const item = await getDoc(itemRef);
			
			if (item.exists()) {
				const product = { id: item.id, ...item.data() }
				setProduct(product)
			} else {
				console.log("No existe el producto")
			}
			
		}
		// obtener todos los datos de firestore
		getData()
	}, [itemID])

	return (
		<div className="item-detail-container max-width">
			{product ? <ItemDetail detail={product} /> : <DotPulse size={40} speed={1.3} color="#7c2cab" />}
		</div>
	)
}
