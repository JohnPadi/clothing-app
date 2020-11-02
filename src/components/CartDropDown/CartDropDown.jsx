import React from 'react';
import './CartDropDown.scss';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import {connect} from 'react-redux';
import {selectCartItemsCount} from '../../redux/cart/cartSelectors';


const CartDropDown = ({cartItems}) => (
	<div className='cart-dropdown'>
		<div className='cart-items'>
			{
				cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
			}
		</div>
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
);

const mapStateToProps = (state) => ({
	cartItems: selectCartItemsCount(state)
});

export default connect(mapStateToProps)(CartDropDown);