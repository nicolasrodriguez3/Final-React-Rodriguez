import { Link } from "react-router-dom"
import logo from "../../assets/shopping-cart2.svg"
import "./CartWidget.css"
import { useCartContext } from "../../context/CartContextProvider"


export default function CartWidget() {
	const { totalCount } = useCartContext()

	return (
		<>
			<Link to="cart" className="cart-widget-icon">
				<img src={logo} alt="Carrito" />
				{totalCount() > 0 && <span className="cart-widget-count">{totalCount()}</span>}
			</Link>
		</>
	)
}
