import React from 'react';
import './ItemList.css';

function ItemList(props) {
	return ( 
		<article className='item'>
			<img src={props.src} alt={props.title} />
			<h3>{props.title}</h3>
			<p>{props.price}</p>
		</article>
	 );
}

export default ItemList;