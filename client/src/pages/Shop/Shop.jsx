import React, {useEffect} from 'react';
//import Preview from '../../components/Preview/Preview';
import {connect} from 'react-redux';
import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverviewContainer';
import {Route} from 'react-router-dom';
import CollectionContainer from '../Collection/CollectionContainer';
//import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.util';
import {fetchCollectionsStart} from '../../redux/shop/shopActions';
//import WithSpinner from '../../components/WithSpinner/WithSpinner';
//import {selectIsCollectionLoaded} from '../../redux/shop/shopSelectors';

const Shop = ({fetchCollectionsStart, match}) => {
	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart]);
			return (
			<div className='shop'>
				<Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
				<Route path={`${match.path}/:collectionId`} component={CollectionContainer}/>
			</div>
		);
	
}

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
	//updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(Shop);
