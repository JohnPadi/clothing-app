import React from 'react';
import './WithSpinner.scss';

const WithSpinner = WrappedComponent => {const Spinner = ({isLoading, ...otherProps})=> {
	return isLoading ?(
		<div className='spinner_overlay'>
			<div className='spinner_container'></div>
		</div>
	) : (
		<WrappedComponent {...otherProps}/>
	);
	};
	return Spinner;
};


export default WithSpinner;