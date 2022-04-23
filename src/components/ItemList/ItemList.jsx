import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

function ItemList() {
	const items = [
		{
			name: 'Item 1',
			price: '$100',
			stock: 10,
			src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60'
		},
		{
			name: 'Item 2',
			price: '$200',
			stock: 1,
			src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60'
		},
		{
			name: 'Item 3',
			price: '$300',
			stock: 5,
			src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60'
		}
	]
	return ( 
		items.map((item, i) => <Item key={i} producto={item}/>)
	 );
}

export default ItemList;