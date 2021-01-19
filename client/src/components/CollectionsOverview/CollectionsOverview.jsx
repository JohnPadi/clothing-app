import React from 'react';
import './CollectionsOverview.scss';
import {connect} from 'react-redux';
import Preview from '../Preview/Preview';
import {selectCollectionsForPreview} from '../../redux/shop/shopSelectors';

const CollectionsOverview = ({collections}) => (
	<div className='collections-overview'>
		{
			collections.map(({id,...otherCollectionProps})=>(
			<Preview key={id} {...otherCollectionProps}/>
			))
		}
	</div>
); 

const mapStateToProps = (state) => ({
  collections: selectCollectionsForPreview(state)
});

export default connect(mapStateToProps)(CollectionsOverview);