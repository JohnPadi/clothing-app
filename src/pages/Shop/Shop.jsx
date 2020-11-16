import React from 'react';
//import Preview from '../../components/Preview/Preview';
//import {connect} from 'react-redux';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import {Route} from 'react-router-dom';
import Collection from '../Collection/Collection';

const Shop =({match}) => (
	<div className='shop'>
		<Route exact path={`${match.path}`} component={CollectionsOverview}/>
		<Route path={`${match.path}/:collectionId`} component={Collection}/>
	</div>
);



export default Shop;
