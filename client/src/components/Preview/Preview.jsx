import React from 'react';
import './Preview.scss';
import ItemCollect from '../ItemCollect/ItemCollect';

const Preview = ({title, items}) => (
		<div className='previewCollect'>
			<h1 className='title'>{title.toUpperCase()}</h1>
			<div className='preview'>
				{
					items.filter((item, idx)=>idx < 4)
					.map((item)=>(
						<ItemCollect key={item.id}
							item={item}/>
						))
				}
			</div>
		</div>
	)

export default Preview;