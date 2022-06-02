import React from "react"
import { Button, Grid, TextField } from "@mui/material"
import { useCartContext } from "../../context/CartContextProvider"
import { useCheckoutContext } from "../../context/CheckoutContextProvider"
import { Link } from "react-router-dom"

export function AddressForm() {
	const { checkout, handleChange, handleSubmit } = useCheckoutContext()
	const { name, email, address, phone } = checkout
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
					<Grid item xs={12}>
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
				</Grid>
			</fieldset>
			<div className="form-btns">
				<span></span>
				<Button variant="contained" color="secondary" type="submit">
					Continuar
				</Button>
			</div>
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
				<div className="form-btns">
					<Button variant="outlined" color="secondary" onClick={handleBack}>
						Volver
					</Button>
					<Button variant="contained" color="secondary" type="submit">
						Continuar
					</Button>
				</div>
			</form>
		</>
	)
}
export function Review() {
	const { checkout, handleBack, finishCheckout } = useCheckoutContext()
	const { cartList, totalPrice } = useCartContext()
	const { name, address, cardNumber, cardName, cardExpiration } = checkout
	console.log(cartList, checkout)

	return (
		<>
			<div className="review-order">
				<h2 className="step-title">Confirmá tu órden</h2>
				<div className="review-order-products">
					<h3>Productos</h3>
					<ul>
						{cartList.map(({ id, quantity, title, price }) => (
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
						<li>{address}</li>
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
			</div>
			<div className="form-btns form-btn-last">
				<Button variant="outlined" color="secondary" onClick={handleBack}>
					Volver
				</Button>
				<Button variant="contained" color="secondary" onClick={finishCheckout}>
					Confirmar compra
				</Button>
			</div>
		</>
	)
}
export function Success() {
	const { orderID } = useCheckoutContext()
	return (
		<div className="thanks">
			<h2 className="form-title">Gracias por tu compra</h2>
			<p>
				Su número de orden es: <b>{orderID}</b>
			</p>
			<p>Pronto recibirá un correo con los detalles de su compra👌</p>

			<Link to="/" className="item-added-link">
				<Button variant="contained" color="secondary">
					Ir a inicio
				</Button>
			</Link>
		</div>
	)
}
