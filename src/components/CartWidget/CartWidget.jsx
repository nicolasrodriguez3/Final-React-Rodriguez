import { Link } from "react-router-dom"
import logo from "../../assets/shopping-cart2.svg"
import "./CartWidget.css"

export default function CartWidget() {
	return (
		<>
			<Link to="cart" className="cart-widget-icon">
				<img src={logo} alt="Carrito" />
			</Link>
		</>
	)
}
