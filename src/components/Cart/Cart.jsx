import { useCartContext } from "../../context/cartContextProvider";
import { CartItem } from "../CartItem/CartItem";


export default function Cart() {
	const { cartList, addToCart, emptyCart, removeFromCart, totalCount, totalPrice } = useCartContext();

	return (
		<div>
			<h1>Cart</h1>
			<div>
				{cartList.map((item) => (
					<CartItem key={item.id} item={item} />
				))}
			</div>
			<div>
				<h3>Total: {totalPrice()}</h3>
				<h3>Total: {totalCount()}</h3>
				<button onClick={emptyCart}>Empty Cart</button>
			</div>
		</div>
	);	
}