import { Button } from "@mui/material"
import React, { useContext, useState } from "react"
import { useCartContext } from "../../context/CartContextProvider"

import { AddressForm, PaymentForm, Review } from "../../components/CheckoutForm/CheckoutForm"
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase/firebaseConfig"
import { useCheckoutContext } from "../../context/CheckoutContextProvider";

const steps = ["Dirección de envio", "Forma de pago", "Confirmá tu órden"]

function getStepContent(step) {
	switch (step) {
		case 0:
			return <AddressForm />
		case 1:
			return <PaymentForm />
		case 2:
			return <Review />
		case 3:
			return <Review />
		default:
			throw new Error("Unknown step")
	}
}

export default function Checkout() {
  const { activeStep } = useCheckoutContext()
  const { cartList, emptyCart, totalPrice } = useCartContext()

	const [orderID, setOrderID] = useState(null)


  const generateOrder = async(data) => {
    try {
        const col = collection(db,"Orders")
        const order = await addDoc(col,data) 
        setOrderID(order.id)
        // clear() vaciar carrito
    } catch (error) {
        console.log(error)
    }
}


	return (
		<>
			<div>Checkout</div>
			{getStepContent(activeStep)}
		</>
	)
}
