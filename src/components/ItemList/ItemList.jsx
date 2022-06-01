import React, { useEffect, useState } from "react"
import { collection, getDocs, limit, query, where } from "firebase/firestore"
import db from "../../firebase/firebaseConfig"
import { useParams } from "react-router-dom"
import InfiniteScroll from "react-infinite-scroll-component"
import Item from "../Item/Item"
import ItemSkeleton from "../ItemSkeleton/ItemSkeleton"

import "./ItemList.css"

const productsRef = collection(db, "items")

export default function ItemList() {
	const { category } = useParams()
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)

	const [page, setPage] = useState(1)
	const LIMIT = 12 * page

	// Resetear el estado "page" cuando se cambie la categoria
	useEffect(() => {
		setPage(1)
		setLoading(true)
		window.scrollTo(0, 0)
	}, [category])

	useEffect(() => {
		// obtener los datos de firestore
		const getData = async (category) => {
			const q = category
				? query(productsRef, where("category", "==", category), limit(LIMIT))
				: query(productsRef, limit(LIMIT))

			const data = await getDocs(q)
			const products = data.docs.map((product) => {
				return { id: product.id, ...product.data() }
			})
			setProducts(products)
			setLoading(false)
		}
		getData(category)
	}, [category, LIMIT])

	// Resetear el estado "page" cuando se cambie la categoria
	useEffect(() => {
		setPage(1)
	}, [category])

	const loadMore = async () => {
		setPage((prevPage) => prevPage + 1)
	}

	const loadingUI = () => {
		const screenWidth = window.innerWidth,
			numberOfItems = Math.floor(screenWidth / 300)
		return (
			<section className="item-list">
				{[...Array(numberOfItems)].map((_, i) => (
					<ItemSkeleton key={i} />
				))}
			</section>
		)
	}
	return loading ? (
		loadingUI()
	) : (
		<InfiniteScroll
			dataLength={products.length} //This is important field to render the next data
			next={loadMore}
			hasMore={true}
			loader={loadingUI}
			endMessage={
				<p style={{ textAlign: "center" }}>
					<b>Yay! You have seen it all</b>
				</p>
			}>
			<section className="item-list">
				{products.map((product) => (
					<Item key={product.id} product={product} />
				))}
			</section>
		</InfiniteScroll>
	)
}
