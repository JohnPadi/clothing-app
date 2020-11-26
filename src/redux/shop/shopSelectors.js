import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	shop => shop.collections
);

export const selectCollection = collecctionUrlParam => createSelector(
	[selectCollections],
	collections => collections[collecctionUrlParam]
);

export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	collections => Object.keys(collections).map(key=>collections[key])
);