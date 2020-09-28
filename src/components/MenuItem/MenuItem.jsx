import React from 'react';
import './MenuItem.scss';

const MenuItem = ({title, imageUrl, size}) => (
		<div  
		className={`${size} menuItem`}>
		<div className='background-image'
		style={{backgroundImage:`url(${imageUrl})`}} />
			<div className='content'>
				<h1 className='title'>{title.toUpperCase()}</h1>
				<span className='subtitle'>BUY NOW</span>
			</div>
		</div>
	)

export default MenuItem;