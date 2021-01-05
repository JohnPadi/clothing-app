import React from 'react';
//import Preview from '../../components/Preview/Preview';
import {connect} from 'react-redux';
import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverviewContainer';
import {Route} from 'react-router-dom';
import CollectionContainer from '../Collection/CollectionContainer';
//import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.util';
import {fetchCollectionsStart} from '../../redux/shop/shopActions';
//import WithSpinner from '../../components/WithSpinner/WithSpinner';
//import {selectIsCollectionLoaded} from '../../redux/shop/shopSelectors';

class Shop extends React.Component{
	/*state = {loading: true};
	unsubscribeFromSnapshot = null;
	*/

	componentDidMount(){
		const {fetchCollectionsStart} = this.props;
		fetchCollectionsStart();
		/*const {updateCollections} =this.props;
		const collectionRef = firestore.collection('collections');
		collectionRef.get().then(
			snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({loading: false});
		}); */
	}

	render(){
		const {match} = this.props;
		//const {loading} = this.state;
		return (
			<div className='shop'>
				<Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
				<Route path={`${match.path}/:collectionId`} component={CollectionContainer}/>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
	//updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(Shop);
