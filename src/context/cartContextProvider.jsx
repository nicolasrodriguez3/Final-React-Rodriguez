import React, { createContext, useState, useContext, useEffect } from "react"

export const CartContext = createContext({}) // crea un contexto
export const useCartContext = () => useContext(CartContext) // usa el contexto

const CartContextProvider = ({ children }) => {
	const [cartList, setCartList] = useState([])
	// obtener carrito del localStorage
	useEffect(() => {
		const cart = JSON.parse(localStorage.getItem("cart"))
		if (cart) {
			setCartList(cart)
		}
	}, [])
	// actualizar el carrito en el localStorage
	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cartList))
	}, [cartList])
	
	// funcion para ver si el producto esta en el carrito
	const isInCart = (id) => cartList.some((item) => item.id === id)

	// funcion para agregar productos al carrito
	const addToCart = (product, quantity) => {
		if (isInCart(product.id)) {
			setCartList(
				cartList.map((item) =>
					item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
				)
			)
		} else {
			setCartList([...cartList, { ...product, quantity }])
		}
	}

	// funcion para vaciar el carrito
	const emptyCart = () => setCartList([])

	// funcion para eliminar un producto del carrito
	const removeFromCart = (id) => setCartList(cartList.filter((item) => item.id !== id))

	// funcion para obtener la cantidad total de productos en el carrito
	const totalCount = () => cartList.reduce((acc, item) => acc + item.quantity, 0)

	// funcion para obtener el valor total del carrito
	const totalPrice = () => cartList.reduce((acc, item) => acc + item.price * item.quantity, 0)

	// funcion para ver cuantas unidades tenemos de un producto
	const quantityOfProduct = (id) =>
		cartList.reduce((acc, item) => acc + (item.id === id ? item.quantity : 0), 0)

	return (
		<CartContext.Provider
			value={{
				cartList,
				addToCart,
				emptyCart,
				removeFromCart,
				totalCount,
				totalPrice,
				quantityOfProduct
			}}>
			{children}
		</CartContext.Provider>
	)
}

export default CartContextProvider
