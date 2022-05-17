import { useCartContext } from "../../context/CartContextProvider"
import CartItem from "../CartItem/CartItem"
import Button from "@mui/material/Button"

export default function Cart() {
	const { cartList, emptyCart, totalCount, totalPrice } = useCartContext()
	return (
		<div>
			{cartList.map((item) => (
				<CartItem key={item.id} item={item} />
			))}
			{cartList.length > 0 ? (
				<>
					<Button onClick={() => emptyCart()} variant="contained" color="secondary">
						Vaciar Carrito
					</Button>
					<h2>Precio total: ${totalPrice()}</h2>
					<h2>Cantidad total: {totalCount()} unidades</h2>
				</>
			) : (
				<h1>El carrito esta vacio</h1>
			)}
		</div>
	)
}
