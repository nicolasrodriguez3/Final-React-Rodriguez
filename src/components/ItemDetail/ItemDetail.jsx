import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

export default function ItemDetail(props) {
	console.log(props)
	const {title, description, price, pictureURL, stock, category, discount} = props.detail
	const [max, setMax] = useState(stock)

	return (
		<section className='product-detail'>
			<picture className='product-detail-left'>
				<img src={pictureURL} alt={title} />
			</picture>
			<aside className="product-detail_right">
				<h1>{title}</h1>
				<p>{description}</p>
				<p>{price}</p>
				<ItemCount stock={max} name={title} onAddToCart={setMax} />
			</aside>
		</section>
	)
}
