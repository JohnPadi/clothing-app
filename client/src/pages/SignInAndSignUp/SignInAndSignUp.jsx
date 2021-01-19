import React from'react';
import './SignInAndSignUp.scss';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const SignInAndSignUp = () => (
	<div className='signIn-and-signUp'>
		<SignIn/>
		<SignUp/>
	</div>
);

export default SignInAndSignUp;