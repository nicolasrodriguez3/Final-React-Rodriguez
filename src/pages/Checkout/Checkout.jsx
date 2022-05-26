import React from "react"
import { AddressForm, PaymentForm, Review, Success } from "../../components/CheckoutForm/CheckoutForm"
import { useCheckoutContext } from "../../context/CheckoutContextProvider";
import Loader from "../../components/Loader/Loader"
import "./Checkout.css"
import { Step, StepLabel, Stepper } from "@mui/material";
import { useCartContext } from "../../context/CartContextProvider";

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
	const { totalCount } = useCartContext()
	const steps = ["Dirección", "Pago", "Confirmación"]

	// verificar que haya productos en el carrito y si no hay, returnar a inicio
	const ITEMS_IN_CART = totalCount()
	if (ITEMS_IN_CART === 0) window.location.href = "/"

	return (
		<div className="checkout">
			<h2 className="title">Checkout</h2>
			<Stepper activeStep={activeStep}>
        {steps.map((label) => {
          
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
			{isloading && <Loader />}
			{!orderID ? getStepContent(activeStep) : <Success />}
			
		</div>
	)
}
