import React, { useEffect, useState } from "react"
import db from "../../firebase/firebaseConfig"
import { collection, getDocs, limit, query, where } from "firebase/firestore"
import ItemList from "../../components/ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"

const productsRef = collection(db, "items")

export default function ItemListContainer(props) {
	const { category } = useParams()
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)

	const [page, setPage] = useState(1)
	const LIMIT = 12 * page
	

	useEffect(() => {
		setLoading(true)
	
		// obtener los datos de firestore
		const getData = async (category) => {
				const q = category ? query(productsRef, where("category", "==", category), limit(LIMIT)) : query(productsRef, limit(LIMIT))
	
				const data = await getDocs(q)
				const products = data.docs.map((product) => {
					return { id: product.id, ...product.data() }
				})
				setProducts(products)
				setLoading(false)
			}
		// obtener todos los datos de firestore
		getData(category)
	}, [category, LIMIT])

	//crear scroll infinito
	useEffect(() => {
		console.log("scroll", window.innerHeight, document.documentElement.scrollTop, document.documentElement.offsetHeight)
		const handleScroll = () => {
			if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
				return
			}
			setPage(page + 1)
		}
		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [page])

	
	return (
		<div className="item-list-container">
			<h2>{props.greeting}❤️</h2>
			<section className="max-width item-list">
				<ItemList products={products} loading={loading} />
			</section>
		</div>
	)
}
