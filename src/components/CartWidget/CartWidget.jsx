import logo from "../../assets/shopping-cart2.svg"
import "./CartWidget.css"

const ItemsCart = (props) => {
	return <span className="cart-widget-count">{props.itemsCart}</span>
}

export default function CartWidget(props) {
	return (
		<>
			<a href="#" className="cart-widget-icon">
				<img src={logo} alt="Carrito" />
				{props.itemsCart > 0 && <ItemsCart itemsCart={props.itemsCart} />}
			</a>
		</>
	)
}
