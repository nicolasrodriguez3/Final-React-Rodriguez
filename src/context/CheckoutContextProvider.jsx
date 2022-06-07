import { addDoc, collection } from "firebase/firestore"
import React, { createContext, useContext, useState } from "react"
import db from "../firebase/firebaseConfig"
import { useCartContext } from "./CartContextProvider"

export const CheckoutContext = createContext({})
export const useCheckoutContext = () => useContext(CheckoutContext)

const CheckoutContextProvider = ({ children }) => {
	const { cartList, totalPrice, emptyCart } = useCartContext()

	const [isloading, setIsLoading] = useState(false)
	const [orderID, setOrderID] = useState(null)
	const [activeStep, setActiveStep] = useState(0)
	const [checkout, setCheckout] = useState({
		name: "",
		email: "",
		address: "",
		phone: "",
		city: "",
		state: "",
		zip: "",
		cardNumber: "",
		cardName: "",
		cardExpiration: "",
		cardCvv: "",
	})

	const handleNext = () => {
		setActiveStep(activeStep + 1)
	}

	const handleBack = () => {
		setActiveStep(activeStep - 1)
	}

	const handleChange = (e) => {
		setCheckout({
			...checkout,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		handleNext()
	}

	const finishCheckout = async () => {
		// { buyer: { name, phone, email }, items: [{id, title, price}], date, total  }
		setIsLoading(true)

		const datos = {
			buyer: {
				name: checkout.name,
				phone: checkout.phone,
				email: checkout.email,
			},
			items: cartList.map((item) => ({
				id: item.id,
				title: item.title,
				price: item.price,
			})),
			date: new Date(),
			total: totalPrice(),
		}
		await generateOrder(datos)
		emptyCart()
		setIsLoading(false)
	}

	const generateOrder = async (data) => {
		try {
			const col = collection(db, "Orders")
			const order = await addDoc(col, data)
			setOrderID(order.id)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<CheckoutContext.Provider
			value={{
				activeStep,
				setActiveStep,
				checkout,
				orderID,
				setOrderID,
				isloading,
				handleChange,
				handleSubmit,
				handleBack,
				handleNext,
				finishCheckout,
			}}>
			{children}
		</CheckoutContext.Provider>
	)
}

export default CheckoutContextProvider
