import React, { useState } from "react"
import { AddressForm, PaymentForm, Review, Success } from "../../components/CheckoutForm/CheckoutForm"
import { useCheckoutContext } from "../../context/CheckoutContextProvider";
import Loader from "../../components/Loader/Loader"

function getStepContent(step) {
	switch (step) {
		case 0:
			return <AddressForm />
		case 1:
			return <PaymentForm />
		case 2:
			return <Review />
		default:
			throw new Error("Unknown step")
	}
}

export default function Checkout() {
  const { activeStep, orderID, isloading } = useCheckoutContext()

	return (
		<>
			<div>Checkout</div>
			{isloading && <Loader />}
			{!orderID ? getStepContent(activeStep) : <Success />}
		</>
	)
}
