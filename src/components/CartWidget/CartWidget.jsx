import logo from "../../assets/shopping-cart2.svg"
import "./CartWidget.css"

export default function CartWidget() {
	return (
		<>
			<a href="#" className="cart-widget-icon">
				<img src={logo} alt="Carrito" />
			</a>
		</>
	)
}
