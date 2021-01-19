import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeBtn = ({price}) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51HoSTOC8GLSJgH3nzyaNegVVuCVxZjsNPkG1pyd7Q6gMtfiYahnkMhmCGO1lqld03UszqRa8Jk0bTdVXxWZYmZaK00pFjLMkXu'
	const onToken = token => {
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token
			}
		}).then(response => {
			alert('Payment Successful!');
		}).catch(error => {
			console.log('Payment error: ', JSON.parse(error));
			alert('There was an issue with your payment. Please make sure to use the provided credit card');
		})	
	};

	return(
		<StripeCheckout
			label='PAY NOW'
			name='40K Clothing'
			billingAddress
			shippingAddress
			image='http://svgshare.com/i/CUz.svg'
			description={`Your total price is $${price}`}
			amount={priceForStripe}
			panelLabel='PAY NOW'
			token={onToken}
			stripeKey={publishableKey}
		/>
	)
}

export default StripeBtn;