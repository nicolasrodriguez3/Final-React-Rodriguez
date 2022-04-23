import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemList.css';

function ItemList(props) {
	const { name, price, stock, src } = props;
	const [max, setMax] = React.useState(stock);
	return ( 
		<article className='item'>
			<img src={src} alt={name} />
			<div className='item-info'>
				<h2>{name}</h2>
				<p>{price}</p>
				<ItemCount stock={max} name={name} onAddToCart={setMax}/>
			</div>
		</article>
	 );
}

export default ItemList;