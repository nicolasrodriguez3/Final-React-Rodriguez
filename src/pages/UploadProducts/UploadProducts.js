import { addDoc, collection } from 'firebase/firestore'
import db from '../../firebase/firebaseConfig'
const uploadProduct = async(data) => {
	try {
			const col = collection(db,"items")
			const order = await addDoc(col,data) 
			console.log(order.id)
			
	} catch (error) {
			console.log(error)
	}
}
export default function UploadProducts() {
	// obtener productos de la API de mercadolibre
const getProducts = async (API_URL, category) => {
	const response = await fetch(`${API_URL}`);
	const data = await response.json();
	console.log(data)
	const products = []

	for(let i = 0; i < 40; i++) {
	//description
	if(!data.results[i].catalog_product_id) continue
	const queryDescription = await fetch(`https://api.mercadolibre.com/products/${data.results[i].catalog_product_id}`)
	const description = await queryDescription.json()
	
	const product = {
		title: data.results[i].title,
		imageURL: description.pictures.map(img => img.url),
		description: description.short_description.content,
		price: data.results[i].price,
		category: category,
		stock: data.results[i].available_quantity
	}
	console.log(product)
	products.push(product)
	uploadProduct(product)
}
	console.log(products)
}
const API_ML = "https://api.mercadolibre.com/sites/MLA/search?q=smartphone"
const category = ["smartphone", "computacion", "electrodomesticos", "televisores"]
//getProducts(API_ML, category[0]);


}


