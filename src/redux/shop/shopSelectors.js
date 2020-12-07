import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	shop => shop.collections
);

export const selectCollection = collecctionUrlParam => createSelector(
	[selectCollections],
	collections => ( collections ?
		collections[collecctionUrlParam]
	: null)
);

export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	collections =>  collections ?
		Object.keys(collections).map(key=>collections[key])
	: []
);