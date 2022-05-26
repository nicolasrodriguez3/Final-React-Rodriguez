import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer"
import Cart from "./components/Cart/Cart"
import NotFound from "./pages/NotFound/NotFound"

import "./App.css"
import CartContextProvider from "./context/CartContextProvider"
import Checkout from "./pages/Checkout/Checkout"
import CheckoutContextProvider, { CheckoutContext } from "./context/CheckoutContextProvider"

function App() {
	return (
		<CartContextProvider>
			<CheckoutContextProvider>
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<ItemListContainer greeting="Bienvenidos!" />}>
							<Route path="categories/:category" element={<ItemListContainer />} />
						</Route>
						<Route path="details" element={<ItemDetailContainer />}>
							<Route path=":id" element={<ItemDetailContainer />} />
						</Route>
						<Route path="cart" element={<Cart />} />
						<Route path="checkout" element={<Checkout />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Router>
			</CheckoutContextProvider>
		</CartContextProvider>
	)
}

export default App

/*
	TODO: 
	* corregir categorias nabvar ✅
	* crear readme ✅
	* crear una pagina de error
	* agregar loading ✅
	* corregir tamaño imagenes ✅
	* corregir estilos de el navbar ✅
	* crear footer
	* agregar un aviso cuando no hay mas stock para agregar al carrito (o mostrar el stock disponible en el componente itemDetail)
	* agregar componente Skeleton de MUI
	* Crear pagina Checkout
	* Enviar orden a firestore y mostrar el numero de orden
*/
