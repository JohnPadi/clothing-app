import React from 'react';
import'./Header.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg'; //special syntax in React for importing SVG.
import {auth} from '../../firebase/firebase.util';
import {connect} from 'react-redux';
import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';

const Header = ({currentUser, hidden}) => (
	<div className='header'>
		<Link className='logo-container' to='/'>
			<Logo className='logo' />
		</Link>
		<div className='options'>
			<Link className='option' to='/shop'>
				SHOP
			</Link>
			<Link className='option' to='/shop'>
				CONTACT
			</Link>
			{
				currentUser ?
				<div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
				:
				<Link className='option' to='/signin'>SIGN IN</Link>
			}
			<CartIcon/>
		</div>
		{
			hidden ? null : <CartDropDown/>
		}
	</div>
)
const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
	currentUser,
	hidden
})

export default connect(mapStateToProps)(Header);