import {takeLatest, call, put, all} from 'redux-saga/effects';
import ShopActionTypes from './shopTypes';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.util';
import {
	fetchCollectionsSuccess,
	fetchCollectionsFailure
} from './shopActions';

export function* fetchCollectionsAsync(){
	try{
		const collectionRef = firestore.collection('collections');
		const snapshot = yield collectionRef.get();
		const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
		yield put(fetchCollectionsSuccess(collectionsMap));		
	} catch(error){
		yield put(fetchCollectionsFailure(error.message))
	}
}

export function* fetchCollectionStart(){
	yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,
	fetchCollectionsAsync
	);
}

export function* shopSagas(){
	yield all([
		call(fetchCollectionStart)
	]);
}