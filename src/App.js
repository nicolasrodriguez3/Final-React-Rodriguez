import Navbar from "./components/Navbar/Navbar"
import "./App.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
	return (
		<>
			<Navbar />
			<ItemListContainer greeting="Bienvenidos!" />

		</>
	)
}

export default App

