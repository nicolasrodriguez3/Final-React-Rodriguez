import React, { useEffect, useState } from "react"
import db from "../../firebase/firebaseConfig"
import { collection, getDocs, query, where } from "firebase/firestore"
import ItemList from "../../components/ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"

export default function ItemListContainer(props) {
	const { category } = useParams()
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		// Funcion para obtener los datos de firestore
		const getData = async (category) => {
			const q = category ? query(collection(db, "items"), where("category", "==", category)) : collection(db, "items")

			const data = await getDocs(q)
			const products = data.docs.map((product) => {
				return { id: product.id, ...product.data() }
			})
			setProducts(products)
			setLoading(false)
		}
		// obtener todos los datos de firestore
		getData(category)
	}, [category])
	
	return (
		<div className="item-list-container">
			<h2>{props.greeting}❤️</h2>
			<section className="max-width item-list">
				<ItemList products={products} loading={loading} />
			</section>
		</div>
	)
}
