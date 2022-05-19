import { useCartContext } from "../../context/CartContextProvider"
import CartItem from "../CartItem/CartItem"
import Button from "@mui/material/Button"
import "./Cart.css"
import img from "../../assets/undraw_empty_cart_co35.svg"
import { Link } from "react-router-dom"

export default function Cart() {
	const { cartList, emptyCart, totalPrice } = useCartContext()

	return cartList.length > 0 ? (
		<div className="cart">
			{cartList.map((item) => (
				<CartItem key={item.id} item={item} />
			))}

			<h2 className="cart-total">Total: ${totalPrice()}</h2>

			<div className="cart-btns">
				<Button variant="contained" color="secondary">
					<Link to="/checkout" className="item-added-link">
						Terminar compra
					</Link>
				</Button>
				<Button onClick={emptyCart} variant="outlined" color="secondary">
					Vaciar Carrito
				</Button>
			</div>
		</div>
	) : (
		<div className="cart-empty">
			<h2>El carrito esta vacio</h2>
			<img src={img} alt="cart empty" className="img-cart-empty" />
		</div>
	)
}
