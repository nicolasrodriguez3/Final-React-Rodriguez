import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemList.css';

function ItemList(props) {
	return ( 
		<article className='item'>
			<img src={props.src} alt={props.title} />
			<div className='item-info'>
				<h2>{props.title}</h2>
				<p>{props.price}</p>
				<ItemCount stock={10}/>
			</div>
		</article>
	 );
}

export default ItemList;