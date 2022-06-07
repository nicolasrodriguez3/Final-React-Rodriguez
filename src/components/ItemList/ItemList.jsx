import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Pagination } from "@mui/material"

import Item from "../Item/Item"
import ItemSkeleton from "../ItemSkeleton/ItemSkeleton"

import "./ItemList.css"

import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../firebase/firebaseConfig"
const productsRef = collection(db, "items")

export default function ItemList() {
	const { category } = useParams()
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)
	const [page, setPage] = useState(1)

	const itemsPerPage = 12,
		LIMIT = itemsPerPage * page

	// Recortar el array de productos segun el numero de pagina
	const sliceProducts = (products, limit) => products.slice(limit - itemsPerPage, limit)

	// Resetear el estado "page" cuando se cambie la categoria y hacer scroll hacia arriba
	useEffect(() => {
		setPage(1)
		setLoading(true)
		window.scrollTo(0, 0)
	}, [category])

	// obtener los datos de firestore
	useEffect(() => {
		const getData = async (category) => {
			const q = category
				? query(productsRef, where("category", "==", category))
				: query(productsRef)

			const data = await getDocs(q)
			const products = data.docs.map((product) => {
				return { id: product.id, ...product.data() }
			})
			setProducts(products)
			setLoading(false)
		}
		getData(category)
	}, [category])

	const LoadingUI = () => {
		const screenWidth = window.innerWidth,
			numberOfItems = Math.floor(screenWidth / 300) > 4 ? 4 : Math.floor(screenWidth / 300)

		return (
			<section className="item-list">
				{[...Array(numberOfItems)].map((_, i) => (
					<ItemSkeleton key={i} />
				))}
			</section>
		)
	}
	// PAGINACION
	// cantidad de paginas
	const totalPages = Math.ceil(products.length / itemsPerPage)
	// handler para cambiar de pagina
	const handlePageChange = (e, value) => {
		setLoading(true)
		setPage(value)
		setLoading(false)
		window.scrollTo(0, 0)
	}

	return loading ? (
		LoadingUI()
	) : (
		<>
			<section className="item-list">
				{sliceProducts(products, LIMIT).map((product) => (
					<Item key={product.id} product={product} />
				))}
			</section>
			<div className="pagination">
				<Pagination count={totalPages} color="secondary" page={page} onChange={handlePageChange} />
			</div>
		</>
	)
}
