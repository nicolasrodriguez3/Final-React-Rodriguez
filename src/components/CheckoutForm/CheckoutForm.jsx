import { Button, TextField } from "@mui/material"
import React, { useState } from "react"
import { useCartContext } from "../../context/CartContextProvider"
import { useCheckoutContext } from "../../context/CheckoutContextProvider"

export function AddressForm({ handler, nextStep }) {
	const { checkout, handleChange, handleSubmit } = useCheckoutContext()
	const { name, email, address, phone, city, state, zip } = checkout
	return (
		<form onSubmit={handleSubmit}>
			<fieldset>
				<legend>Dirección de envio</legend>
				<div>
					<TextField
						label="Nombre y apellido"
						type={"text"}
						variant="standard"
						name="name"
						value={name}
						onChange={handleChange}
					/>
				</div>
				<div>
					<TextField
						label="Email"
						type={"email"}
						variant="standard"
						name="email"
						value={email}
						onChange={handleChange}
					/>
					<TextField
						label="Telefono"
						type={"tel"}
						variant="standard"
						name="phone"
						value={phone}
						onChange={handleChange}
					/>
				</div>
				<div>
					<TextField
						label="Dirección"
						type={"text"}
						variant="standard"
						name="address"
						value={address}
						onChange={handleChange}
					/>
					<TextField
						id="standard-basic"
						label="Código postal"
						type={"number"}
						variant="standard"
						name="zip"
						value={zip}
						onChange={handleChange}
					/>
				</div>
				<div>
					<TextField
						label="Ciudad"
						type={"text"}
						variant="standard"
						name="city"
						value={city}
						onChange={handleChange}
					/>
					<TextField
						label="Provincia"
						type={"text"}
						variant="standard"
						name="state"
						value={state}
						onChange={handleChange}
					/>
				</div>
				<Button variant="contained" color="secondary" type="submit">
					Continuar
				</Button>
			</fieldset>
		</form>
	)
}
export function PaymentForm() {
	const { checkout, handleChange, handleSubmit, handleBack } = useCheckoutContext()

	const { cardNumber, cardName, cardExpiration, cardCvv } = checkout

	return (
		<>
			<h2>Forma de pago</h2>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend>Shipping Address</legend>
					<div>
						<TextField
							label="Número de tarjeta"
							type={"number"}
							variant="standard"
							name="cardNumber"
							value={cardNumber}
							onChange={handleChange}
						/>
					</div>
					<div>
						<TextField
							label="Nombre del titular"
							type={"text"}
							variant="standard"
							name="cardName"
							value={cardName}
							onChange={handleChange}
						/>
					</div>
					<div>
						<TextField
							label="Fecha de expiración"
							type={"number"}
							variant="standard"
							name="cardExpiration"
							value={cardExpiration}
							onChange={handleChange}
						/>
						<TextField
							label="CVV"
							type={"number"}
							variant="standard"
							name="cardCvv"
							value={cardCvv}
							onChange={handleChange}
						/>
					</div>

					<Button variant="outlined" color="secondary" onClick={handleBack}>
						Volver
					</Button>
					<Button variant="contained" color="secondary" type="submit">
						Continuar
					</Button>
				</fieldset>
			</form>
		</>
	)
}
export function Review() {
	const { checkout, handleBack, finishCheckout } = useCheckoutContext()
	const { cartList, totalPrice } = useCartContext()
	const {
		name,
		email,
		address,
		phone,
		city,
		state,
		zip,
		cardNumber,
		cardName,
		cardExpiration,
		cardCvv,
	} = checkout
	console.log(cartList,checkout)

	return (
		<>
			<h2>Confirmá tu órden</h2>
			<div>
				Productos
				<ul>
					{cartList.map((item) => (
						<li key={item.id}>
							<p>
								{item.quantity}x {item.title} ${item.price * item.quantity}
							</p>
						</li>
					))}
				</ul>
				Total: {totalPrice()}
			</div>
			<div>
				<h2>Nombre: {name}</h2>
				<h2>Email: {email}</h2>
				<h2>Dirección: {address}</h2>
				<h2>Teléfono: {phone}</h2>
				<h2>Ciudad: {city}</h2>
				<h2>Provincia: {state}</h2>
				<h2>Código postal: {zip}</h2>
				<h2>Número de tarjeta: {cardNumber}</h2>
				<h2>Nombre del titular: {cardName}</h2>
				<h2>Fecha de expiración: {cardExpiration}</h2>
				<h2>CVV: {cardCvv}</h2>
			</div>
			<Button variant="outlined" color="secondary" onClick={handleBack}>
				Volver
			</Button>
			<Button variant="contained" color="secondary" onClick={finishCheckout}>
				Continuar
			</Button>
		</>
	)
}
export function Success() {
	const { orderID } = useCheckoutContext()
	return (
		<>
			<h2>Gracias por tu compra</h2>
			<p>Su número de orden es: <b>{orderID}</b></p>
		</>
	)
}