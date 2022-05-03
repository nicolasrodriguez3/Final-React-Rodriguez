import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import "./App.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<ItemListContainer greeting="Bienvenidos!" />} />
				<Route path="details" element={<ItemDetailContainer />} />
			</Routes>
		</Router>
	)
}

export default App
