import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ItemDetail from "../../components/ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { doc, getDoc } from "firebase/firestore"
import db from "../../firebase/firebaseConfig"
import Loader from "../../components/Loader/Loader"

export default function ItemDetailContainer() {
	const [product, setProduct] = useState(null)
	const itemID = (useParams().id)

	useEffect(() => {
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
			{product ? <ItemDetail detail={product} /> : Loader()}
		</div>
	)
}
