import React from 'react';
import './Collection.scss';
import ItemCollect from '../../components/ItemCollect/ItemCollect';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shopSelectors';

const Collection = ({collection}) => {
	const {title,items} = collection;
	return(
	<div className='collection'>
		<h2 className='title'>{title}</h2>
		<div className='items'>
			{
				items.map(item=><ItemCollect key={item.id} item={item}/>)
			}
		</div>
	</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state) //This is neccessary cuz unlike other selectors, this one needs a part of the state depending on the URL parameter.
});

export default connect(mapStateToProps)(Collection);