import React from 'react';
import './ItemCollect.scss';

const ItemCollect = ({id, name, price, imageUrl}) => (
		<div className='itemCollect'>
			<div className='image' 
			style={{backgroundImage: `url(${imageUrl})`}}
			/> 
		
			<div className='collectFooter'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
		</div>
	)

export default ItemCollect;
