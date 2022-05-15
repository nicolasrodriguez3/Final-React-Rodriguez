import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import db from "../../firebase/firebaseConfig"
import { collection, getDocs, query, where } from "firebase/firestore"
import ItemList from "../../components/ItemList/ItemList"
import "./ItemListContainer.css"

export default function ItemListContainer(props) {
	const { category } = useParams()
	const [products, setProducts] = useState([])

	useEffect(() => {
		// Funcion para obtener los datos de firestore
		const getData = async (category) => {
			const q = category ? query(collection(db, "items"), where("category", "==", category)) : collection(db, "items")

			const data = await getDocs(q)
			const products = data.docs.map((product) => {
				return { id: product.id, ...product.data() }
			})
			setProducts(products)
		}
		// obtener todos los datos de firestore
		getData(category)
	}, [category])
	
	return (
		<div className="item-list-container">
			<h2>{props.greeting}❤️</h2>
			<section className="max-width item-list">
				<ItemList products={products} />
			</section>
		</div>
	)
}
