import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const StripeBtn = ({price}) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51HoSTOC8GLSJgH3nzyaNegVVuCVxZjsNPkG1pyd7Q6gMtfiYahnkMhmCGO1lqld03UszqRa8Jk0bTdVXxWZYmZaK00pFjLMkXu'
	const onToken = token => {
		console.log(token);
		alert('PAYMENT SUCCESSFUL')
	}

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