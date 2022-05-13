import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import db from "../../firebase/firebaseConfig"
import { collection, getDocs } from "firebase/firestore"
import ItemList from "../../components/ItemList/ItemList"
import "./ItemListContainer.css"

export default function ItemListContainer(props) {
	const { category } = useParams()
	const [products, setProducts] = useState([])

	useEffect(() => {
		const getData = async () => {
			const data = await getDocs(collection(db, "items"))
			const products = data.docs.map((product) => {
				return { id: product.id, ...product.data() }
			})
			setProducts(products)
		}
		getData()
	}, [])
	return (
		<div className="item-list-container">
			<h2>{props.greeting}❤️</h2>
			<section className="max-width item-list">
				<ItemList products={products} />
			</section>
		</div>
	)
}
