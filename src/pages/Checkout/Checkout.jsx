import React from "react"
import {
	AddressForm,
	PaymentForm,
	Review,
	Success,
} from "../../components/CheckoutForm/CheckoutForm"
import { useCheckoutContext } from "../../context/CheckoutContextProvider"
import "./Checkout.css"
import { Step, StepLabel, Stepper } from "@mui/material"

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
	const steps = ["Dirección", "Pago", "Confirmación"]

	return (
		<div className="checkout-container">
			<div className="checkout">
				{/* Si no hay orderID mostrar el form de checkout. Caso contrario mostrar la confirmacion */}
				{!orderID && !isloading ? (
					<>
						<h2 className="form-title">Checkout</h2>
						<Stepper alternativeLabel activeStep={activeStep}>
							{steps.map((label) => {
								return (
									<Step key={label}>
										<StepLabel>{label}</StepLabel>
									</Step>
								)
							})}
						</Stepper>
						{getStepContent(activeStep)}
					</>
				) : (
					<Success />
				)}
			</div>
		</div>
	)
}
