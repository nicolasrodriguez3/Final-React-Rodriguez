import React from "react"
import { Button, Grid, TextField } from "@mui/material"
import { useCartContext } from "../../context/CartContextProvider"
import { useCheckoutContext } from "../../context/CheckoutContextProvider"

export function AddressForm() {
	const { checkout, handleChange, handleSubmit } = useCheckoutContext()
	const { name, email, address, phone, city, state, zip } = checkout
	return (
		<form onSubmit={handleSubmit}>
			<fieldset>
				<legend className="step-title">Dirección de envio</legend>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<TextField
							label="Nombre y apellido"
							type={"text"}
							variant="standard"
							fullWidth
							required
							name="name"
							value={name}
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							label="Email"
							type={"email"}
							variant="standard"
							fullWidth
							required
							name="email"
							value={email}
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							label="Telefono"
							type={"tel"}
							variant="standard"
							fullWidth
							required
							name="phone"
							value={phone}
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							label="Dirección"
							type={"text"}
							variant="standard"
							fullWidth
							required
							name="address"
							value={address}
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							id="standard-basic"
							label="Código postal"
							type={"number"}
							variant="standard"
							fullWidth
							required
							name="zip"
							value={zip}
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							label="Ciudad"
							type={"text"}
							variant="standard"
							fullWidth
							required
							name="city"
							value={city}
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							label="Provincia"
							type={"text"}
							variant="standard"
							fullWidth
							required
							name="state"
							value={state}
							onChange={handleChange}
						/>
					</Grid>
				</Grid>
			</fieldset>
			<Button variant="contained" color="secondary" type="submit" className="btn-next">
				Continuar
			</Button>
		</form>
	)
}
export function PaymentForm() {
	const { checkout, handleChange, handleSubmit, handleBack } = useCheckoutContext()
	const { cardNumber, cardName, cardExpiration, cardCvv } = checkout

	return (
		<>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend className="step-title">Forma de pago</legend>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={6}>
							<TextField
								label="Número de tarjeta"
								type={"number"}
								variant="standard"
								name="cardNumber"
								fullWidth
								required
								value={cardNumber}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								label="Nombre del titular"
								type={"text"}
								variant="standard"
								fullWidth
								required
								name="cardName"
								value={cardName}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								label="Fecha de expiración"
								type={"number"}
								variant="standard"
								fullWidth
								required
								name="cardExpiration"
								value={cardExpiration}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								label="CVV"
								type={"number"}
								variant="standard"
								fullWidth
								required
								name="cardCvv"
								value={cardCvv}
								onChange={handleChange}
							/>
						</Grid>
					</Grid>
				</fieldset>
				<Button variant="outlined" color="secondary" onClick={handleBack}>
					Volver
				</Button>
				<Button variant="contained" color="secondary" type="submit">
					Continuar
				</Button>
			</form>
		</>
	)
}
export function Review() {
	const { checkout, handleBack, finishCheckout } = useCheckoutContext()
	const { cartList, totalPrice, } = useCartContext()
	const { name, address, city, state, zip, cardNumber, cardName, cardExpiration } = checkout
	console.log(cartList, checkout)

	return (
		<div className="review-order">
			<h2 className="step-title">Confirmá tu órden</h2>
			<div className="review-order-products">
				<h3>Productos</h3>
				<ul>
					{cartList.map(({id, quantity, title, price}) => (
						<li key={id}>
							<p>
								{quantity}x {title}
							</p>
							<p>${price * quantity}</p>
						</li>
					))}
				</ul>
				<div className="review-total">
					<span>Total</span> <b>${totalPrice()}</b>
				</div>
			</div>
			<div className="review-order-shipping">
				<h3>Datos para envío</h3>
				<ul>
					<li>{name}</li>
					<li>
						{address}, {city}
					</li>
					<li>
						{state}. CP: {zip}
					</li>
				</ul>
			</div>

			<div className="review-order-payment">
				<h3>Datos para pago</h3>
				<ul>
					<li>Número de tarjeta: {cardNumber}</li>
					<li>Nombre del titular: {cardName}</li>
					<li>Fecha de expiración: {cardExpiration}</li>
				</ul>
			</div>

			<div>
				<Button variant="outlined" color="secondary" onClick={handleBack}>
					Volver
				</Button>
				<Button variant="contained" color="secondary" onClick={finishCheckout}>
					Continuar
				</Button>
			</div>
		</div>
	)
}
export function Success() {
	const { orderID } = useCheckoutContext()
	return (
		<>
			<h2>Gracias por tu compra</h2>
			<p>
				Su número de orden es: <b>{orderID}</b>
			</p>
		</>
	)
}
