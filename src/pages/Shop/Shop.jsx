import React from 'react';
//import Preview from '../../components/Preview/Preview';
import {connect} from 'react-redux';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import {Route} from 'react-router-dom';
import Collection from '../Collection/Collection';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.util';
import {updateCollections} from '../../redux/shop/shopActions';
import WithSpinner from '../../components/WithSpinner/WithSpinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends React.Component{
	state = {loading: true};
	unsubscribeFromSnapshot = null;

	componentDidMount(){
		const {updateCollections} =this.props;
		const collectionRef = firestore.collection('collections');
		collectionRef.get().then(
			snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({loading: false});
		}); 
	}

	render(){
		const {match} = this.props;
		const {loading} = this.state;
		return (
			<div className='shop'>
				<Route exact path={`${match.path}`} render={props=>(<CollectionsOverviewWithSpinner isLoading={loading} {...props}/>)}/>
				<Route path={`${match.path}/:collectionId`} render={props=>(<CollectionWithSpinner isLoading={loading} {...props}/>)}/>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(Shop);
