import Navbar from "./components/Navbar/Navbar"
import "./App.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {
	return (
		<>
			<Navbar />
			<ItemListContainer greeting="Bienvenidos!" />
			<ItemDetailContainer />
		</>
	)
}

export default App

