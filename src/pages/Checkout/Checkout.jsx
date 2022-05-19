import { Button, TextField } from "@mui/material"
import React, { useState } from "react"
import { AddressForm, PaymentForm, Review } from "../../components/CheckoutForm/CheckoutForm";


const steps = ['Dirección de envio', 'Método de pago', 'Confirmá tu órden'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    case 3:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
	const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

	return (
		<>
			<div>Checkout</div>
				{getStepContent(activeStep)}
				{(activeStep > 0) && <Button variant="outlined" color="secondary" onClick={handleBack}>
				Volver
					</Button>}
				{activeStep < (steps.length) && <Button variant="contained" color="secondary" onClick={handleNext}>
				{activeStep === steps.length - 1 ? 'Confirmar' : 'Continuar'}
					</Button>}
		</>
	)
}
