import {combineReducers} from 'redux';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';//this is the Local Storage on the window browser.
import directoryReducer from './directory/directoryReducer';
import shopReducer from './shop/shopReducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart'] //this is an array that contains the string names of any of the reducers that we want to store
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer); /* combineReducers({
	user: userReducer,
	cart: cartReducer
}); */