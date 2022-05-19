import { Link } from "react-router-dom"
import logo from "../../assets/shopping-cart2.svg"
import "./CartWidget.css"
import { useCartContext } from "../../context/CartContextProvider"
import { useEffect, useState } from "react"


export default function CartWidget() {
	const { totalCount } = useCartContext()
	const [count, setCount] = useState()
	useEffect(() => {
		setCount(totalCount)
	}, [totalCount])

	return (
		<>
			<Link to="cart" className="cart-widget-icon">
				<img src={logo} alt="Carrito" />
				{count > 0 && <span className="cart-widget-count">{count < 100 ? count : `99+`}</span>}
			</Link>
		</>
	)
}
