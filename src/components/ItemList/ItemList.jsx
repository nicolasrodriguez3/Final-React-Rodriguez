import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemList.css';

function ItemList(props) {
	return ( 
		<article className='item'>
			<img src={props.src} alt={props.title} />
			<h3>{props.title}</h3>
			<p>{props.price}</p>
			<ItemCount stock={10}/>
		</article>
	 );
}

export default ItemList;