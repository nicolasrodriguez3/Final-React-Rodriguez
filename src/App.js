import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import "./App.css"
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer"

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<ItemListContainer greeting="Bienvenidos!" />}>
					<Route path="categories/:category" element={<ItemListContainer />} />
				</Route>
				<Route path="details" element={<ItemDetailContainer />}>
					<Route path=":id" element={<ItemDetailContainer />} />
				</Route>
			</Routes>
		</Router>
	)
}

export default App

/*
	TODO: 
	* corregir categorias nabvar ✅
	* crear readme ✅
	* crear una pagina de error
	* agregar loading ✅
	* corregir tamaño imagenes
	* corregir estilos de el navbar ✅
	* crear footer
	* agregar un aviso cuando no hay mas stock para agregar al carrito (o mostrar el stock disponible en el componente itemDetail)
*/