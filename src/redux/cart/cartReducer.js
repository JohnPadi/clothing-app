import CartActionTypes from './cartTypes';

const INITIAL_STATE ={
	hidden: true //ie. hide our dropdwon when it comes to the website.
};

const cartReducer = (state=INITIAL_STATE, action) => {
	switch(action.type){
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return{
				...state,
				hidden: !state.hidden
			};
		default:
			return state;
	}
}


export default cartReducer;