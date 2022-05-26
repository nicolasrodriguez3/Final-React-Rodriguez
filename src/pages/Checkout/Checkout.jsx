import React from "react"
import { AddressForm, PaymentForm, Review, Success } from "../../components/CheckoutForm/CheckoutForm"
import { useCheckoutContext } from "../../context/CheckoutContextProvider";
import Loader from "../../components/Loader/Loader"
import "./Checkout.css"
import { Step, StepLabel, Stepper } from "@mui/material";

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
	const steps = ["nico1", "nico2", "nico3"]
	return (
		<div className="checkout">
			<h2>Checkout</h2>
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
