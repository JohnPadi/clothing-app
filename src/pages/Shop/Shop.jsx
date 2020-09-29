import React from 'react';
import ShopData from './ShopData';
import Preview from '../../components/Preview/Preview';

class Shop extends React.Component{
	constructor(props){
		super(props);
		this.state={
			collections: ShopData
		};
	}

	render(){
		const {collections} = this.state;
		return(
				<div className='shop'>
					{
						collections.map(({id,...otherCollectionProps})=>(
							<Preview key={id} {...otherCollectionProps}/>
							))
					}
				</div>
			)
	}
}

export default Shop;
