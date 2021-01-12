import React, {useState} from'react';
import './SignUp.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import {signUpStart} from '../../redux/user/userActions';
import {connect} from 'react-redux';

const SignUp = ({signUpStart}) => {
	const [userCredentials, setUserCredentials] = useState({
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		})

	const {displayName, email, password, confirmPassword} = userCredentials;
	const handleSubmit = async event => {
		event.preventDefault();
		if(password !== confirmPassword){
			alert("Passwords don't match!");
			return;
		}
		signUpStart({displayName, email, password});
	};

	const handleChange = event => {
		const {name, value} = event.target;
		setUserCredentials({...userCredentials, [name]: value});
	}

		return(
			<div className='sign-up'>
				<h2 className='title'>I don't have an account</h2>
				<span>Sign Up with your Email and Password</span>
				<form className='sign-upForm' 
				onSubmit={handleSubmit}>
					<FormInput type='text' name='displayName'
					value={displayName}
					onChange={handleChange}
					label='Display Name' required />
					<FormInput type='email' name='email'
					value={email}
					onChange={handleChange}
					label='Email' required />
					<FormInput type='password' name='password'
					value={password}
					onChange={handleChange}
					label='Password' required />
					<FormInput type='password' name='confirmPassword'
					value={confirmPassword}
					onChange={handleChange}
					label='Confirm Password' required />
					<CustomButton type='submit'>SIGN UP</CustomButton>
				</form>
			</div>
			);
	
}

const mapDispatchToProps = dispatch => ({
	signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);