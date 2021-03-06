import React from 'react';
import './Checkout.scss';
import {connect} from 'react-redux';
import {selectCartItems, selectCartTotalPrice} from '../../redux/cart/cartSelectors';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'
import StripeBtn from '../../components/StripeBtn/StripeBtn';

const Checkout = ({cartItems, total}) => (
	<div className='checkout-page'>
		<div className='checkout-header'>
			<div className='header-block'>
				<span>Product</span>
			</div>
			<div className='header-block'>
				<span>Description</span>
			</div>
			<div className='header-block'>
				<span>Quantity</span>
			</div>
			<div className='header-block'>
				<span>Price</span>
			</div>
			<div className='header-block'>
				<span>Remove</span>
			</div>
		</div>
		{
			cartItems.map(cartItem => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem}/>
			))
		}
		<div className='total'>
			<span>TOTAL: ${total}</span>
		</div>
		<StripeBtn price={total}/>
	</div>
);

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
	total: selectCartTotalPrice(state)
});

export default connect(mapStateToProps)(Checkout);