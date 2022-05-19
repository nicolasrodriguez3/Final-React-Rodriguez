import { TextField } from '@mui/material'
import React from 'react'

export function AddressForm() {
	return (
		<form>
				<fieldset>
					<legend>Shipping Address</legend>
					<div>
						<TextField
							id="standard-basic"
							label="Nombre y apellido"
							type={"text"}
							variant="standard"
						/>
					</div>
					<div>
						<TextField id="standard-basic" label="Email" type={"email"} variant="standard" />
						<TextField id="standard-basic" label="Telefono" type={"tel"} variant="standard" />
					</div>
					<div>
						<TextField id="standard-basic" label="Dirección" type={"text"} variant="standard" />
						<TextField
							id="standard-basic"
							label="Código postal"
							type={"number"}
							variant="standard"
						/>
					</div>
					<div>
						<TextField id="standard-basic" label="Ciudad" type={"text"} variant="standard" />
						<TextField id="standard-basic" label="Provincia" type={"text"} variant="standard" />
					</div>

				</fieldset>
			</form>
	)
}
export function PaymentForm() {
	return (
		<div>PaymentForm</div>
	)
}
export function Review() {
	return (
		<div>Review</div>
	)
}
