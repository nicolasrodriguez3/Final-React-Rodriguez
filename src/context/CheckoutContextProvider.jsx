import React, { createContext, useContext, useState } from 'react'

export const CheckoutContext = createContext({})
export const useCheckoutContext = () => useContext(CheckoutContext)

const CheckoutContextProvider = ({ children }) => {
	const [activeStep, setActiveStep] = useState(0)
	const [checkout, setCheckout] = useState({
		name: '',
		email: '',
		address: '',
		phone: "",
		city: '',
		state: '',
		zip: '',
		cardNumber: '',
		cardName: '',
		cardExpiration: '',
		cardCvv: '',
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

	return (
		<CheckoutContext.Provider
			value={{
				activeStep,
				checkout,
				handleChange,
				handleSubmit,
				handleBack,
				handleNext,
			}}
		>
			{children}
		</CheckoutContext.Provider>
	)
}

export default CheckoutContextProvider