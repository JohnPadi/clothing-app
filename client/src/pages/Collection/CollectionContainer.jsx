import {connect} from 'react-redux';
import {compose} from 'redux';
import {selectIsCollectionLoaded} from '../../redux/shop/shopSelectors';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import Collection from './Collection';
import {createStructuredSelector} from 'reselect';

const mapStateToProps = createStructuredSelector({
	isLoading: state => !selectIsCollectionLoaded(state)
});

const CollectionContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(Collection);

export default CollectionContainer;
