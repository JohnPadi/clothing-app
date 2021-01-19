import {all, call} from 'redux-saga/effects';
import {fetchCollectionStart} from './shop/shopSagas';
import {userSagas} from './user/userSagas';
import {cartSagas} from './cart/cartSagas';
import {shopSagas} from './shop/shopSagas';


export default function* rootSaga(){
	yield all([
		call(fetchCollectionStart),
		call(userSagas),
		call(cartSagas),
		call(shopSagas)
	]);
}